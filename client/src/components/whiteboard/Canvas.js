import React from "react"
import io from 'socket.io-client'
import { v4 } from "uuid"
import ColorPicker from './ColorPicker'
import ClearCanvasButton from './ClearCanvasButton'
import config from "../../config"

const { server_url: SERVER_URL } = config
const DRAW_ENDPOINT = `${SERVER_URL}/draw`
const CLEAR_ENDPOINT = `${SERVER_URL}/clearCanvas`
const LINE_JOIN = 'round'
const LINE_CAP = 'round'
const LINE_WIDTH = 5
const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 600
const DEFAULT_COLOR = '#FFFFFF'

class Canvas extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isPainting: false,
			previousPosition: {
				offsetX: 0,
				offsetY: 0,
			},
			lineColor: DEFAULT_COLOR,
		}

		this.lines = []
		this.line = []
		this.userId = v4()
		this.socket = io.connect(SERVER_URL)
	}

	setColor = color => {
		this.setState({
			lineColor: color,
		})
	}

	async componentDidMount() {
		this.canvas.width = CANVAS_WIDTH
		this.canvas.height = CANVAS_HEIGHT
		this.ctx = this.canvas.getContext('2d')
		this.ctx.lineJoin = LINE_JOIN
		this.ctx.lineCap = LINE_CAP
		this.ctx.lineWidth = LINE_WIDTH

		const canvasData = await fetch(`${DRAW_ENDPOINT}/${this.props.roomId}`, {
			method: 'GET',
		})
		const lines = await canvasData.json()
		lines.forEach(line => {
			this.paint(line.start, line.stop, line.color)
		})

		this.socket.emit('join', this.props.roomId)
		this.socket.on('draw', data => {
			const { userId, line } = data
			if (userId !== this.userId) {
				line.forEach(line => {
					this.paint(line.start, line.stop, line.color)
				})
			}
		})
		this.socket.on('clear', () => {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
		})
	}

	onMouseDown = ({ nativeEvent }) => {
		const { offsetX, offsetY } = nativeEvent;
		this.setState({
			isPainting: true,
			previousPosition: {
				offsetX,
				offsetY,
			},
		});
	};

	onMouseMove = ({ nativeEvent }) => {
		if (this.state.isPainting) {
			const { offsetX, offsetY } = nativeEvent;
			const offSet = { offsetX, offsetY };

			const position = {
				start: { ...this.state.previousPosition },
				stop: { ...offSet },
				color: this.state.lineColor,
			};

			this.line.push(position);
			this.paint(
				this.state.previousPosition,
				offSet,
				this.state.lineColor
			);
		}
	};

	endPaintEvent = () => {
		if (this.state.isPainting) {
			this.setState({
				isPainting: false,
			});
			this.sendPaintData();
		}
	}

	paint = (previousPosition, currentPosition, colour) => {
		const { offsetX, offsetY } = currentPosition;
		const { offsetX: previousX, offsetY: previousY } = previousPosition;

		this.ctx.beginPath();
		this.ctx.strokeStyle = colour;

		this.ctx.moveTo(previousX, previousY);
		this.ctx.lineTo(offsetX, offsetY);
		this.ctx.stroke();
		this.setState({
			previousPosition: { offsetX, offsetY }
		});
	}

	sendPaintData = async () => {
		this.lines.push(this.line)

		const paintData = {
			line: this.line,
			userId: this.userId,
			roomId: this.props.roomId,
		};

		this.socket.emit('draw', paintData)

		this.line = [];
	}

	clearCanvas = () => {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
		this.socket.emit('clear', this.props.roomId)
	}

	componentWillUnmount() {
		this.socket.disconnect()
	}

	render() {
		return (
			<>
				<canvas
					ref={ref => { this.canvas = ref }}
					style={{ background: 'black' }}
					onMouseDown={this.onMouseDown}
					onMouseLeave={this.endPaintEvent}
					onMouseUp={this.endPaintEvent}
					onMouseMove={this.onMouseMove}
				/>
				<ColorPicker
					selectedColor={this.state.lineColor}
					setColor={this.setColor}
				/>
				<ClearCanvasButton clearCanvas={this.clearCanvas} />
			</>
		)
	}
}

export default Canvas

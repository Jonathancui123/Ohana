import React from "react";
import Pusher from "pusher-js";
import { v4 } from "uuid";
import config from "../config";

const { server_url: SERVER_URL } = config;
const drawEndpoint = `${SERVER_URL}/draw`;

const userColour = "#FFFFFF";
const guestColour = "#FF0000";

class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPainting: false,
      previousPosition: {
        offsetX: 0,
        offsetY: 0,
      },
    };

    this.line = [];
    this.userId = v4();
    this.pusher = new Pusher(process.env.REACT_APP_pusherKey, {
      cluster: "us2",
    });
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
      };

      this.line = this.line.concat(position);
      this.paint(
        this.state.previousPosition,
        offSet,
        userColour
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
    const paintData = {
      line: this.line,
      userId: this.userId,
      // roomId: this.props.roomId,
    };

    await fetch(drawEndpoint, {
      method: "POST",
      body: JSON.stringify(paintData),
      headers: {
        "content-type": "application/json",
      },
    });
    this.line = [];
  }

  componentDidMount() {
    this.canvas.width = 600;
    this.canvas.height = 400;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = 5;

    const channel = this.pusher.subscribe("painting");
    channel.bind("draw", data => {
      const { userId, line } = data;
      if (userId !== this.userId) {
        line.forEach(position => {
          this.paint(position.start, position.stop, guestColour);
        })
      }
    })
  }

  render() {
    return (
      <canvas
        ref={ref => { this.canvas = ref }}
        style={{ background: 'black' }}
        onMouseDown={this.onMouseDown}
        onMouseLeave={this.endPaintEvent}
        onMouseUp={this.endPaintEvent}
        onMouseMove={this.onMouseMove}
      />
    )
  }
}

export default Canvas

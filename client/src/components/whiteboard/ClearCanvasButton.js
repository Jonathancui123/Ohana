import React from 'react'

import ClearLogo from "../../layouts/clear.png"

import './ClearCanvasButton.css'

class ClearCanvasButton extends React.Component {
    render() {
        const { clearCanvas } = this.props

        return (
            <button
                className="clearCanvasButton"
                onClick={clearCanvas}
            >
                <img className="clearButton" src={ClearLogo} fluid />
            </button>
        )
    }
}

export default ClearCanvasButton

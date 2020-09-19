import React from 'react'

class ClearCanvasButton extends React.Component {
    render() {
        const { clearCanvas } = this.props

        return (
            <button
                onClick={clearCanvas}
            >
                Clear
            </button>
        )
    }
}

export default ClearCanvasButton

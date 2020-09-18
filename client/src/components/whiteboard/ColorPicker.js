import React from 'react'

import ColorButton from './ColorButton'

const colors = [
    '#FFFFFF',
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#00FFFF',
]

class ColorPicker extends React.Component {
    render() {
        const { selectedColor, setColor } = this.props

        const colorButtons = colors.map(color => (
            <ColorButton
                color={color}
                selected={selectedColor === color}
                setColor={setColor}
            />
        ))

        return colorButtons
    }
}

export default ColorPicker

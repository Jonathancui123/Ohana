import React from 'react'

import ColorButton from './ColorButton'

const colors = [
    '#FFFFFF',
    '#ac83ad',
    '#51d4fe',
    '#0000FF',
    '#a2a2a2',
    '#000000',
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

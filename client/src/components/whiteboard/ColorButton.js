import React from 'react'

import './ColorButton.css'

class ColorButton extends React.Component {
    render() {
        const {
            color,
            selected,
            setColor,
        } = this.props
        const styles = {
            backgroundColor: color
        }

        return (
            <div
                className={`colorButton ${selected && 'selected'}`}
                style={styles}
                onClick={() => setColor(color)}
            />
        )
    }
}

export default ColorButton

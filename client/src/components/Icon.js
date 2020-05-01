import React from 'react';

const Icon = (props) => {
    const iconStyle = {
        verticalAlign: "middle",
        ...props.style
    }
    
    return (
        <div onClick={props.onClick}>
            <i 
                className={props.class}
                style={iconStyle}
                {...props}
            />
        </div>
    ) 
}
export default Icon
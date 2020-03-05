import React from 'react';
import Logo from '../logo.gif';
import '../App.css';

export default class TitleBar extends React.Component {
    render() {
        return (
            <div className="title-bar">
                <img className="logo" src={Logo} alt="" onClick={this.props.handleClick} />
                <h1>paste</h1><span className="spacing" /><h1>pal</h1>
            </div>
        );
    }
}
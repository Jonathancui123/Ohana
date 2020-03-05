import React from 'react';
import Logo from '../logo.gif';
import '../App.css';

export default class TitleBar extends React.Component {
    render() {
        return (
            <div className="title-bar">
                <div id = "title" onClick={this.props.handleClick}>
                    <img className = "logo" src = {Logo} alt = ""/>
                    <h1>paste pal</h1>
                </div>
            </div>
        );
    }
}
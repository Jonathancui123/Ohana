import React from 'react';
import Menu from './Menu';
import './titlebar.css';

export default class TitleBar extends React.Component {
    render() {
        var logos = [
                require('../logos/1.gif'),
                require('../logos/2.gif'),
                require('../logos/3.gif'),
                require('../logos/4.gif'),
                require('../logos/5.gif'),
                require('../logos/6.gif'),
                require('../logos/7.gif'),
        ]
        return (
            <div className="title-bar">
                <div id = "title">
                    <img className="logo" src={logos[Math.floor(Math.random() * 6) + 1]} alt=""/>
                    <h1>Ohana</h1>
                </div>
                <Menu 
                    text = {this.props.text}
                    changed = {this.props.changed}
                    submit = {this.props.submit}
                    copyClipboard={this.props.copyClipboard}
                    mode = {this.props.mode}
                    setMode = {this.props.setMode} 
                    fontSize = {this.props.fontSize}
                    setFontSize = {this.props.setFontSize}
                    />
            </div>
        );
    }
}
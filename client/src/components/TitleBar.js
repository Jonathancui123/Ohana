import React from 'react';
import Menu from './Menu';
import Logo from '../logo.gif';
import './titlebar.css';

export default class TitleBar extends React.Component {
    render() {
        return (
            <div className="title-bar">
                <div id = "title">
                    <img className = "logo" src = {Logo} alt = ""/>
                    <h1>paste pal</h1>
                </div>
                <Menu 
                    text = {this.props.text}
                    changed = {this.props.changed}
                    submit = {this.props.submit}
                    copyClipboard={this.props.copyClipboard}
                    mode = {this.props.mode}
                    setMode = {this.props.setMode} />
            </div>
        );
    }
}
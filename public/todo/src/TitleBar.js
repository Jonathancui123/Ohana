import React from 'react';
import Logo from './logo.gif';
import './App.css';

export default class TitleBar extends React.Component {
    render() {
        return (
        <div class = "title-bar">
            <img class = "logo" src = {Logo} alt = "" onClick={this.props.handleClick}/>
            <h1>paste</h1><span class="spacing"/><h1>pal</h1>
        </div>
        );
    }
}
import React from 'react';
import './titlebar.css';

import SettingsLogo from "../layouts/settings.png"
import Modal from "./Modal";


export default class TitleBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };

        this.showModal = this.showModal.bind(this);
    }

    showModal() {
        this.setState({
            show: !this.state.show
        });
    }

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
                <input type="image" className="icons" src={SettingsLogo} onClick={this.showModal}/>
                <Modal 
                    onClose={this.showModal}
                    show={this.state.show}
                    mode = {this.props.mode}
                    setMode = {this.props.setMode} 
                    fontSize = {this.props.fontSize}
                    setFontSize = {this.props.setFontSize}
                />
            </div>
        );
    }
}
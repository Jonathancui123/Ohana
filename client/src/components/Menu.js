import React from "react";
import Icon from "./Icon";
import Modal from "./Modal";
import "./icons.css";
import "../fonts/all";

export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this)
    }

    openModal() {
        this.setState({
            showModal: true
        });
    }

    closeModal() {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div className="menu">
                <Modal showModal={this.state.showModal} closeModal={this.closeModal}></Modal>
                <Icon
                    id="copy"
                    onClick={this.openModal}
                    className="fas fa-circle"
                />
                <Icon
                    id="copy"
                    onClick={this.props.copyClipboard}
                    className="fas fa-copy"
                />
                <Icon
                    id="save"
                    onClick={this.props.submit}
                    className="fas fa-save"
                />
            </div>
        );
    }
}

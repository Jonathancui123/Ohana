import React from "react";
import Icon from "./Icon";
import Modal from "./Modal";
import "@fortawesome/fontawesome-free/css/all.css";
import "./icons.css";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.renderCopyOrSave = this.renderCopyOrSave.bind(this);
    }

    openModal() {
        this.setState({
            showModal: true
        });
    }

    closeModal() {
        this.setState({
            showModal: false
        });
    }

    renderCopyOrSave() {
        let icon;
        if (this.props.text === "") {
            icon = (
                <Icon
                    key="disabledSave" //required for prop rerender
                    id="save"
                    onClick={this.props.submit}
                    className="fas fa-save"
                    style={{
                        opacity: "30%",
                        cursor: "not-allowed"
                    }}
                />
            );
        } else if (this.props.changed) {
            icon = (
                <Icon
                    key="save" //required for prop rerender
                    id="save"
                    onClick={this.props.submit}
                    className="fas fa-save"
                />
            );
        } else {
            icon = (
                <Icon
                    key="copy" //required for prop rerender
                    id="copy"
                    onClick={this.props.copyClipboard}
                    className="fas fa-copy"
                />
            );
        }
        return icon;
    }

    render() {
        return (
            <div className="menu">
                <Modal
                    showModal={this.state.showModal}
                    closeModal={this.closeModal}

                    mode={this.props.mode}
                    setMode={this.props.setMode}
                ></Modal>
                {this.renderCopyOrSave()}
                <Icon
                    id="copy"
                    onClick={this.openModal}
                    className="fas fa-cog"
                />
            </div>
        );
    }
}

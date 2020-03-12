import React from 'react';
import './modal.css';

export default class Modal extends React.Component {

    render() {
        if (!this.props.showModal) {
            return null;
            }
        else {
            return (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Settings</h2>
                        <button className="close" onClick={this.props.closeModal}>Close</button>
                    </div>
                </div>
            )
        }
    }
}
import React from "react";
import "./modal.css";

export default class Modal extends React.Component {
    render() {
        if (!this.props.showModal) {
            return null;
        } else {
            return (
                <div className="modal">
                    <div className="modal-content">
                        <b>Settings</b>
                        <div id="syntax-highlighting">
                            <p>Syntax highlighting:</p>
                            <select
                                id="mode-select"
                                value={this.props.mode}
                                onChange={this.props.setMode}
                            >
                                <option value="text">text</option>
                                <option value="python">python</option>
                                <option value="typescript">javascript</option>
                                <option value="c_cpp">c/c++</option>
                                <option value="java">java</option>
                                <option value="csharp">c#</option>
                                <option value="golang">go</option>
                                <option value="objectivec">objective c</option>
                                <option value="php">php</option>
                                <option value="ruby">ruby</option>
                                <option value="rust">rust</option>
                                <option value="sql">sql</option>
                                <option value="kotlin">kotlin</option>
                                <option value="clojure">clojure</option>
                                <option value="d">d</option>
                                <option value="cobol">cobol</option>
                                <option value="haskell">haskell</option>
                                <option value="json">json</option>
                                <option value="lua">lua</option>
                                <option value="julia">julia</option>
                                <option value="markdown">markdown</option>
                                <option value="scala">scala</option>
                                <option value="swift">swift</option>
                            </select>
                        </div>
                        <div id="font-size">
                            <p>Font size:</p>
                            <select>
                                <option>1</option>
                            </select>
                        </div>
                        <button
                            className="close"
                            onClick={this.props.closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            );
        }
    }
}

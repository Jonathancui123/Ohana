import React from "react";
import "./modal.css";

export default class Modal extends React.Component {
    render() {
        if (!this.props.showModal) {
            return null;
        } else {
            return (
                <div className="modal">
                    <div className="modalContent">
                        <b>Settings</b>
                        <div>
                            <p>Syntax highlighting:</p>
                            <select
                                id="modeSelect"
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
                        <div>
                            <p>Font size:</p>
                            <select
                                id="fontSizeSelect"
                                value={this.props.fontSize}
                                onChange={this.props.setFontSize}
                            >
                                <option value="8px">8</option>
                                <option value="9px">9</option>
                                <option value="10px">10</option>
                                <option value="11px">11</option>
                                <option value="12px">12</option>
                                <option value="14px">14</option>
                                <option value="16px">16</option>
                                <option value="18px">18</option>
                                <option value="20px">20</option>
                                <option value="24px">24</option>
                                <option value="30px">30</option>
                                <option value="46px">36</option>
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

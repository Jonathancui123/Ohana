import React from "react";
import TitleBar from "../components/TitleBar.js";
import Editor from "../components/Editor.js";
import Canvas from "../components/Canvas";

import { withRouter } from 'react-router-dom'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changed: false,
            mode: "python",
            fontSize: "20px",
            fileUrl: this.props.match.params.id,
            value: "",
            redirect: undefined
        };
        this.setMode = this.setMode.bind(this);
        this.setFontSize = this.setFontSize.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    setMode(event) {
        this.setState({ mode: event.target.value });
    }

    setFontSize(event) {
        this.setState({ fontSize: event.target.value });
    }

    handleChange(event) {
        this.setState({
            changed: !!event, //convert to boolean
            value: event
        }); //TODO: handle submit asynchronously
    }

    render() {
        return (
            <div className="container">
                <TitleBar
                    changed={this.state.changed}
                    submit={this.submit}
                    text={this.state.value}
                    copyClipboard={this.copyClipboard}
                    mode={this.state.mode}
                    setMode={this.setMode}
                    fontSize={this.state.fontSize}
                    setFontSize={this.setFontSize}
                />
                <Editor
                    placeholder={"Hi! Type to begin."}
                    value={this.state.value}
                    onChange={this.handleChange}
                    submit={this.submit}
                    mode={this.state.mode}
                    fontSize={this.state.fontSize}
                    fileUrl={this.state.fileUrl}
                />
            </div>
        );
    }
}

export default withRouter(Main)
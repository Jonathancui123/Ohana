import React from "react";
import TitleBar from "./components/TitleBar.js";
import Editor from "./components/Editor.js";
import "./App.css";

import config from "./config.js"
const SERVER_URL = config.server_url;
const CLIENT_URL = config.client_url;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changed: false,
            mode: "text",
            fontSize: "16px",
            id: "",
            value: ""
        };
        this.setMode = this.setMode.bind(this);
        this.setFontSize = this.setFontSize.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.loadFile = this.loadFile.bind(this);
        this.updateURL = this.updateURL.bind(this);
        this.copyClipboard = this.copyClipboard.bind(this);

        console.log(SERVER_URL)
        console.log(CLIENT_URL)

        this.loadFile();
    }
    setMode(event) {
        this.setState({ mode: event.target.value });
    }

    setFontSize(event) {
        this.setState({ fontSize: event.target.value });
    }

    loadFile() {
        let fileurl = window.location.pathname;
        //if (fileurl.length > 1) {
        fetch(SERVER_URL + fileurl, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    value: data.data
                });
            });
        //}
    }

    handleChange(event) {
        this.setState({
            changed: !!event, //convert to boolean
            value: event
        }); //TODO: handle submit asynchronously
    }

    updateURL(id) {
        window.history.pushState(null, null, "/" + id);
    }

    copyClipboard() {
        console.log(`Copied: ${this.state.id}`);
        if (this.state.id) {
            navigator.clipboard.writeText(
                `http://${CLIENT_URL}/${this.state.id}`
            );
        }
    }

    submit(event) {
        if (this.state.changed && this.state.value !== "") {
            fetch(SERVER_URL + "/upload", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: this.state.value
                })
            })
                .then(response => response.json())
                .then(responseJson => {
                    this.setState({ changed: false, id: responseJson.id });
                    this.updateURL(responseJson.id);
                })
                .catch(err => console.log(err));
            this.setState({ changed: false });
        }
    }

    render() {
        console.log(`Pathname: ${window.location.pathname}`)

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
                />
            </div>
        );
    }
}

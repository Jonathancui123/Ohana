import React from "react";
import TitleBar from "./components/TitleBar.js";
import Editor from "./components/Editor.js";
import fileUrlUtil from "./utils/fileUrl.js";
import "./App.css";

import config from "./config.js"
// const SERVER_URL = config.server_url;
const CLIENT_URL = config.client_url;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changed: false,
            mode: "python",
            fontSize: "20px",
            fileUrl: fileUrlUtil.getFileUrl(),
            value: "",
            redirect: undefined
        };
        this.setMode = this.setMode.bind(this);
        this.setFontSize = this.setFontSize.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.copyClipboard = this.copyClipboard.bind(this);       
    }

    async componentDidMount(){
        if (fileUrlUtil.getFileUrl() === undefined){ // generate a new URL for a new file
            let newPath = await fileUrlUtil.newFileUrl()
            console.log(`new file url is: ${newPath}`)
            this.setState({fileUrl: newPath})
            this.redirect(newPath)
        }   //Firepad editor will try to load their document otherwise
    }
    redirect(path) {
        window.history.pushState(null, null, "/" + path);
    }

    setMode(event) {
        this.setState({ mode: event.target.value });
    }

    setFontSize(event) {
        this.setState({ fontSize: event.target.value });
    }

    // loadFile() {
    //     let fileurl = fileUrlUtil.getFileUrl();
    //     fetch(SERVER_URL + fileurl, {
    //         method: "GET",
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json"
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 value: data.data
    //             });
    //         });
    // }

    handleChange(event) {
        this.setState({
            changed: !!event, //convert to boolean
            value: event
        }); //TODO: handle submit asynchronously
    }


    copyClipboard() {
        console.log(`Copied: ${this.state.fileUrl}`);
        if (this.state.fileUrl) {
            navigator.clipboard.writeText(
                `http://${CLIENT_URL}/${this.state.fileUrl}`
            );
        }
    }

    // submit(event) {
    //     if (this.state.changed && this.state.value !== "") {
    //         fetch(SERVER_URL + "/upload", {
    //             method: "POST",
    //             headers: {
    //                 "Accept": "application/json",
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 data: this.state.value
    //             })
    //         })
    //             .then(response => response.json())
    //             .then(responseJson => {
    //                 this.setState({ changed: false, fileUrl: responseJson.id });
    //                 this.redirect(responseJson.id);
    //             })
    //             .catch(err => console.log(err));
    //         this.setState({ changed: false });
    //     }
    // }

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

import React from "react";
import Main from './layouts/Main'
import Landing from './layouts/Landing'
import fileUrlUtil from "./utils/fileUrl.js";

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useParams
} from "react-router-dom";

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
            fileUrl: "",
            value: "",
            redirect: undefined
        };
        this.setMode = this.setMode.bind(this);
        this.setFontSize = this.setFontSize.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.copyClipboard = this.copyClipboard.bind(this);
    }

    // async componentDidMount() {
    //     if (fileUrlUtil.getFileUrl() === undefined) { // generate a new URL for a new file
    //         let newPath = await fileUrlUtil.newFileUrl()
    //         console.log(`new file url is: ${newPath}`)
    //         this.setState({ fileUrl: newPath })
    //         this.redirect(newPath)
    //     }   //Firepad editor will try to load their document otherwise
    // }

    redirect(path) {
        window.history.pushState(null, null, "/" + path);
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


    copyClipboard() {
        console.log(`Copied: ${this.state.fileUrl}`);
        if (this.state.fileUrl) {
            navigator.clipboard.writeText(
                `http://${CLIENT_URL}/${this.state.fileUrl}`
            );
        }
    }

    render() {
        return (
          <Router>
            <Switch>
              <Route path="/:id">
                <Main />                
              </Route>
              <Route exact path="/">
                <Landing />
              </Route>
            </Switch>
          </Router>
        );
    }
}

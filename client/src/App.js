import React from "react";
import Main from './layouts/Main'
import Landing from './layouts/Landing'
import fileUrlUtil from "./utils/fileUrl.js";

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useParams, Redirect
} from "react-router-dom";

import "./App.css";

import config from "./config.js"

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
        this.createRoom = this.createRoom.bind(this);
        this.setRoom = this.setRoom.bind(this)
    }

    async createRoom() {
      let fileUrl = await fileUrlUtil.newFileUrl()
      this.setState({ fileUrl })
    }
    
    setRoom(fileUrl) {
      this.setState({fileUrl})
    }

    redirect(path) {
        window.history.pushState(null, null, "/" + path);
    }

    render() {
        const { fileUrl } = this.state;
        return (
            <Router>
              <Switch>
                <Route path="/:id">
                  <Main />                
                </Route>
                <Route exact path="/">
                  {fileUrl ? 
                  <Redirect to={`/${fileUrl}`} from='/' /> :
                  <Landing createRoom={this.createRoom} setRoom={this.setRoom} /> }
                </Route>
              </Switch>
            </Router>
        );
    }
}

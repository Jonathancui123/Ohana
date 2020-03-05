import React from 'react';
import TitleBar from './components/TitleBar.js';
import Editor from './components/Editor.js';
import './App.css';

const config = require('./config.json');
const SERVER_URL = config.server_url;
const CLIENT_URL = config.client_url;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false,
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.loadFile = this.loadFile.bind(this);
    this.updateURL = this.updateURL.bind(this);

    this.loadFile();
  }

  loadFile() {
    let fileurl = window.location.pathname;
    //if (fileurl.length > 1) {
    fetch(SERVER_URL + fileurl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
      .then((data) => {
        this.setState({
          value: data.data
        })
      })
    //}

  }

  handleChange(event) {
    this.setState({
      changed: true,
      value: event
    }); //TODO: handle submit asynchronously
  }

  updateURL(id) {
    window.history.pushState(null, null, '/' + id);
    navigator.clipboard.writeText(CLIENT_URL + '/' + id);
  }

  submit(event) {
    if (this.state.changed && this.state.value !== "") {
      fetch(SERVER_URL + '/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: this.state.value
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          this.updateURL(responseJson.id);
        })
        .catch((err) => console.log(err));
      this.setState({ changed: false });
    }
  }

  render() {
    return (
      <div className="container" >
        <TitleBar changed={this.state.changed} handleClick={this.submit} />
        <Editor
          placeholder={"Hi! Press ctrl+s or click the dog to save.\n\n Hint: this will automatically put the generated link to your clipboard."}
          value={this.state.value}
          onChange={this.handleChange}
          submit={this.submit}
        />
      </div>
    )
  }
}

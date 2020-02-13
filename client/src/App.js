import React from 'react';
import TitleBar from './TitleBar.js';
import './App.css';

const config = require('./config.json');
const SERVER_URL = config.server_url;
const CLIENT_URL = config.client_url;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false,
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.submit = this.submit.bind(this);
    this.loadFile = this.loadFile.bind(this);
    this.updateURL = this.updateURL.bind(this);

    this.loadFile();
  }
  
  loadFile() {
    let fileurl = window.location.pathname
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
      value: event.target.value
    }); //TODO: handle submit asynchronously
  }

  handleKeyDown(event) {
    if (event.ctrlKey || event.metaKey) {
      switch (event.key.toLowerCase()) {
        case 's':
          event.preventDefault();
          this.submit(event);
          break;
        default:
          break;
      }
    }
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
      this.setState({changed:false});
    }
  }

  render() {
    return ( 
      <div class = "container" >
        <TitleBar changed = {this.state.changed} handleClick = {this.submit}/>
        <textarea autoFocus 
          placeholder = "Hi! Press ctrl+s or click the dog to save."
          value= {this.state.value} 
          onKeyDown = {this.handleKeyDown} 
          onChange = {this.handleChange} /> 
      </div>
    )
  }

}



export default Form;
import React from 'react';

import './App.css';
const config = require('./config.json');
const SERVER_URL = config.server_url;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value }); //TODO: handle submit asynchronously
  }

  handleKeyDown(event) {
    if (event.ctrlKey || event.metaKey) {
      switch (event.key.toLowerCase()) {
        case 's':
          event.preventDefault();
          this.submit(event);
          break;
      }
    }
  }

  updateURL(url) {
    console.log(`update url to : ${url}`)
    //TODO
  }

  submit(event) {
    console.log(SERVER_URL)

    fetch(SERVER_URL + 'upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: this.state.value })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.updateURL(responseJson.body.url);
      })
      .catch((err) => console.log(err));
    console.log(this.state.value);
  }

  render() {

    return (
      <div class="container">
        <textarea onKeyDown={this.handleKeyDown} onChange={this.handleChange} >
          {this.state.value}
        </textarea>
      </div>
    )
  }

}



export default Form;

import React from 'react';

import './App.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.Submit = this.Submit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleKeyDown(event) {
    if(event.ctrlKey || event.metaKey){
      switch (event.key.toLowerCase()) {
        case 's':
            event.preventDefault();
            this.Submit();
            break;
      }
    }
  }

  Submit(event) {
    console.log(this.state.value);
  }

  render() {

    return (
      <textarea onKeyDown={this.handleKeyDown} onChange={this.handleChange}>
        {this.state.value}
      </textarea>
    )
  }

}



export default Form;

import React from 'react';

import './App.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleKeyDown(event) {
    if(event.ctrlKey || event.metaKey){
      switch (event.key.toLowerCase()) {
        case 's':
            event.preventDefault();
            this.submit(event);
            break;
      }
    }
  }

  submit(event) {
    this.setState({value: event.target.textContent});
    console.log(this.state.value);
  }

  render() {

    return (
      <div contentEditable="true" onKeyDown={this.handleKeyDown} onChange={this.handleChange}>
        {this.state.value}
      </div>
    )
  }

}



export default Form;

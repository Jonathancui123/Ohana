import React from 'react';

import './App.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleKeypress(event) {
    console.log(event.ctrlKey);
    if(event.ctrlKey || event.metaKey){
      switch (String.fromCharCode(event.which).toLowerCase()) {
        case 's':
            event.preventDefault();
            alert('ctrl-s');
            break;
        case 'f':
            event.preventDefault();
            alert('ctrl-f');
            break;
        case 'g':
            event.preventDefault();
            alert('ctrl-g');
            break;
        }
    }
  }

  handleSubmit(event) {
    console.log(this.state.value);
    this.setState({value:this.state.value + "\n"})
    
    event.preventDefault();
  }

  render() {

    return (
      <textarea onKeyPress={this.handleKeypress}>
        {this.state.value}
      </textarea>
    )
  }

}



export default Form;

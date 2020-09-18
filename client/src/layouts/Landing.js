import React from 'react';
import './landing.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
    this.handleKey = this.handleKey.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleKey(event) {
    if (event.key === 'Enter') {
      this.props.setRoom(this.state.url);
    }
  }

  handleChange(event) {
    this.setState({ url: event.target.value });
  }

  handleSubmit(event) {
    this.props.setRoom(this.state.url);
    event.preventDefault();
  }

  render() {
    const { url } = this.state;
    const { createRoom } = this.props;
    return (
      <div className="container">
        <img className="logo" src="./stitch.png" />
        <h2 className="title">Ohana</h2>
        <button type="button" className="create btn" onClick={createRoom}>Create a Room</button>
        <input
          onKeyPress={this.handleKey} 
          onChange={this.handleChange} 
          value={url} 
          type="text" 
          className="text-field" 
          placeholder="Enter Room Code" />
        <button onClick={this.handleSubmit} className="join btn">Join a Room</button>        
      </div>
    );
  }
}

export default Landing;

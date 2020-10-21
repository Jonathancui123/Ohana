import React from 'react';
import './landing.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      loading: false
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

  startLoading() {
    this.setState({ loading: true });
  }

  render() {
    const { url } = this.state;
    const { createRoom } = this.props;
    return (
      <div className="container">
        <img className="logo" src="./stitch.png" />
        <h2 className="title">Ohana</h2>
        <button type="button" className="create btn" onClick={() => {
          this.startLoading();
          createRoom();
        }}>New Room</button>
       
        {this.state.loading && 
          <h2 >Getting Lilo to start the server...</h2>
        }

        {this.state.loading && 
        <Loader
         type="Bars"
         color="#497ab4"
         height={50}
         width={50}
        //  timeout={3000} //3 secs
      />}


        <input
          onKeyPress={this.handleKey} 
          onChange={this.handleChange} 
          value={url} 
          type="text" 
          className="text-field" 
          placeholder="Enter Room Code" />
        <button onClick={this.handleSubmit} className="join btn">Join Room</button>        
      </div>
    );
  }
}

export default Landing;

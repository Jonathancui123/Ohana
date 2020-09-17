import React from 'react';
import './landing.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <div className="row">
          <div className="container-fluid align-items-center justify-content-center">
            <div className="justify-content-center text-center mt-5">
              <div>
                <img className="img-fluid" style={{ maxHeight: '100px' }} src="./stitch.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container-fluid align-items-center justify-content-center">
            <div className="justify-content-center text-center">
              <div>
                <h2 className="display-2 text-primary mt-5 mb-5">Ohana</h2>
                <button type="button" className="createButton" onClick={createRoom}>Create Room</button>
              </div>
              <div>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input onChange={this.handleChange} value={url} type="text" className="text-field" placeholder="Enter Room Name" />
                  </div>
                  <button type="submit" className="createButton mt-5 mb-5">Join Room</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

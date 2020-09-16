import React from "react";
import "./landing.css"

class Landing extends React.Component {

    render() {
      return (
        <div class="container">
          <div class="row">
                  <div class="container-fluid align-items-center justify-content-center">
                      <div class="justify-content-center text-center mt-5">
                          <div>
                              <img class="img-fluid" style ={{maxHeight: '100px'}} src="./stitch.png"/>
                          </div>
                      </div>
                  </div>
          </div>
          <div class="row">
                  <div class="container-fluid align-items-center justify-content-center">
                      <div class="justify-content-center text-center">
                          <div>
                              <h2 class="display-2 text-primary mt-5 mb-5">Ohana</h2>
                              <button type="button" class="createButton">Create Room</button>
                          </div>
                          <div>
                              <form>
                                <div class="form-group">
                                  <input type="text" class="text-field" placeholder="Enter Room Name"/>
                                </div>
                              </form>
                              <button type="button" class="createButton mt-5 mb-5">Join Room</button>
                          </div>
                      </div>
                  </div>
          </div>
        </div>
      );
    }
  }

export default Landing
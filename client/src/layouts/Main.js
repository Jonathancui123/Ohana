import React from "react";
import { withRouter } from 'react-router-dom'

import TitleBar from "../components/TitleBar.js";
import Editor from "../components/Editor.js";
import Canvas from "../components/whiteboard/Canvas";
import config from '../config'

import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';

import './main.css';
import Modal from "../components/Modal.js";

import EditorLogo from "./editor.png"
import WhiteboardLogo from "./whiteboard.png"
import SettingsLogo from "./settings.png"

const { server_url: SERVER_URL } = config

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false,
      mode: "python",
      fontSize: "20px",
      fileUrl: this.props.match.params.id,
      value: "",
      redirect: undefined
    };
    this.setMode = this.setMode.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // Firebase configuration for real-time collaboration on firepad
    var firebaseConfig = config.firebaseConfig;
    window.firebase.initializeApp(firebaseConfig);
  }

  setMode(event) {
    this.setState({ mode: event.target.value });
  }

  setFontSize(event) {
    this.setState({ fontSize: event.target.value });
  }

  handleChange(event) {
    this.setState({
      changed: !!event, //convert to boolean
      value: event
    }); //TODO: handle submit asynchronously
  }

  render() {
    return (
      <div>
        {/* <TitleBar
          changed={this.state.changed}
          submit={this.submit}
          text={this.state.value}
          copyClipboard={this.copyClipboard}
          mode={this.state.mode}
          setMode={this.setMode}
          fontSize={this.state.fontSize}
          setFontSize={this.setFontSize}
        /> */}
        <Tabs className='main'>
          <TabList className='tab-list'>
            <Tab>
              <img class="imageLogo" src={EditorLogo} />
            </Tab>
            <Tab>
              <img class="imageLogo" src={WhiteboardLogo} />
            </Tab>
            <Tab>
              <img class="imageLogo" src={SettingsLogo} />
            </Tab>
          </TabList>
          <TabPanel>
          <Editor
            placeholder={"Hi! Type to begin."}
            value={this.state.value}
            onChange={this.handleChange}
            submit={this.submit}
            mode={this.state.mode}
            fontSize={this.state.fontSize}
            fileUrl={this.state.fileUrl}
          />          
          </TabPanel>
          <TabPanel>
          <Canvas
                    roomId={this.state.fileUrl}
                />
          </TabPanel>
          <TabPanel>
            <Modal showModal={true}/>
          </TabPanel>
        </Tabs>
          
        </div>

    );
  }
}

export default withRouter(Main)
import React, { Component } from 'react';
import config from "../config.js";
import "./editor.css"
import "ace-builds/src-noconflict/theme-nord_dark";
import "../utils/modeImport";

export default class Editor extends Component {

    constructor(props) {
        super(props)

        this.session = null
        this.editor = undefined
        this.firepad = undefined

        this.defaultText = '# Welcome to Ohana :)\n\ndef ohana() -> String:\n\tohanaMeaning = "family"\n\tfamilyMeaning = "nobody gets left behind or forgotten"\n\treturn "Ohana means " + ohanaMeaning + ". Family means " + familyMeaning + "."\n\n# To get started, choose a language and start typing!'
    }

    async componentDidMount(){
        //// Create ACE
        console.log('editor updated')
        var editor = window.ace.edit("firepad-container");
        editor.setOptions({
            fontFamily: "Fira Code",
            theme: 'ace/theme/nord_dark',
            indentedSoftWrap : false,
            showPrintMargin: false,
        });
        this.editor = editor

        var session = editor.getSession();
        session.setUseWrapMode(true);
        session.setUseWorker(false);
        session.setMode("ace/mode/python");
        this.session = session
       

        // Get Firebase Database reference.
        var firepadRef = this.getRef(this.props.fileUrl);      
        //// Create Firepad.
        var firepad = window.Firepad.fromACE(firepadRef, this.editor, {
            defaultText: this.defaultText
        });        
        this.firepad = firepad
    }

    
    componentDidUpdate(prevProps, prevState){
        if (prevProps.mode !== this.props.mode){    // User has changed the mode
            this.session.setMode("ace/mode/" + this.props.mode);
        } 
        if(prevProps.fileUrl !== this.props.fileUrl) {  // We have pushed a new fileUrl 
            // Get the new Firebase Database reference.
            var firepadRef = this.getRef(this.props.fileUrl);      
            //// Create Firepad.
            var firepad = window.Firepad.fromACE(firepadRef, this.editor, {
                defaultText: this.defaultText
            });        
        }
    }
    componentWillUnmount() {
        this.editor.destroy()

        this.firepad.dispose()
    }
    render() {        
        return (
            <div 
            id="firepad-container"
            style={{
                "height": '80vh',
                "margin": '0 20px 0 20px',
                fontSize: this.props.fontSize,
            }}
            >
            </div>
        );
    }



    getRef(fileUrl) {
        var ref = window.firebase.database().ref();
        if (fileUrl !== undefined) { // if a file url is specified, use that as ref
          ref = ref.child(fileUrl);
        } else { // The user has not yet been directed to a room, use a random firebase location   
            ref = ref.push(); // generate unique location.

            // window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
        }
        if (typeof console !== 'undefined') {
          console.log('Firebase data: ', ref.toString());
        }
        return ref;
      }
}
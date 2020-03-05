import React, { Component } from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/mode-c_cpp";

export default class Editor extends Component {
    render() {
        return (
            <div>
                <AceEditor
                    focus //Autofocus
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    mode='text'
                    theme='tomorrow_night'
                    commands={[
                        {
                            name: 'save',
                            bindKey: { win: 'Ctrl-s', mac: 'Command-s' },
                            exec: this.props.submit
                        }
                    ]}
                    name="paste-pal-editor"
                    showGutter={true}
                    editorProps={{ $blockScrolling: true }}
                    wrapEnabled={true}
                    showPrintMargin={false}
                    height={"550px"} //TODO: Implement dynamic height with CSS -Tony
                    width={"100%"}
                    fontSize={'16px'}
                    style={{
                        "font-family": 'Fira Code'
                    }} />
            </div>
        );
    }
}
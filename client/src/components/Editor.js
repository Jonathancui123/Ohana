import React, { Component } from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "../utils/modeImport";

export default class Editor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                height: '80vh'
            }}>
                <AceEditor
                    focus //Autofocus
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    mode={this.props.mode}
                    theme='tomorrow_night'
                    commands={[
                        {
                            name: 'save',
                            bindKey: { win: 'Ctrl-s', mac: 'Command-s' },
                            exec: this.props.submit
                        }
                    ]}
                    name="paste-pal-editor"
                    showGutter={false}
                    editorProps={{ $blockScrolling: true }}
                    wrapEnabled={true}
                    showPrintMargin={false}
                    height={"100%"} //TODO: Implement dynamic height with CSS -Tony
                    width={"100%"}
                    fontSize={'16px'}
                    setOptions={{
                        "indentedSoftWrap":false,
                    }}
                    style={{
                        "font-family": 'Fira Code',
                        "margin-left": '20px'
                    }} />
            </div>
        );
    }
}
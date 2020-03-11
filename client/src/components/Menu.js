import React from 'react';
import Icon from './Icon';
import './icons.css';
import '../fonts/all';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.renderCopyOrSave = this.renderCopyOrSave.bind(this);
  }

  renderCopyOrSave() {
    let icon;
    if (this.props.changed) {
      icon = <Icon
        key='save'
        id='save'
        onClick={this.props.submit}
        className="fas fa-save" />
    } else {
      icon = <Icon
        key='copy'
        id='copy'
        onClick={this.props.copyClipboard}
        className="fas fa-copy" />
    }
    return icon;
  }

  render() {
    return (
      <div className='menu'>
        {this.renderCopyOrSave()}
        <select id='mode' value={this.props.mode} onChange={this.props.setMode}>
          <option value='text'>text</option>
          <option value='python'>python</option>
          <option value='javascript'>javascript</option>
          <option value='c_cpp'>C/C++</option>
        </select>
      </div>
    )
  }
}
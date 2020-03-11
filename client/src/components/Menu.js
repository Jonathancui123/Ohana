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
          <option value='typescript'>javascript</option>
          <option value='c_cpp'>c/c++</option>
          <option value='java'>java</option>
          <option value='csharp'>c#</option>
          <option value='golang'>go</option>
          <option value='objectivec'>objective c</option>
          <option value='php'>php</option>
          <option value='ruby'>ruby</option>
          <option value='rust'>rust</option>
          <option value='sql'>sql</option>
          <option value='kotlin'>kotlin</option>
          <option value='clojure'>clojure</option>
          <option value='d'>d</option>
          <option value='cobol'>cobol</option>
          <option value='haskell'>haskell</option>
          <option value='json'>json</option>
          <option value='lua'>lua</option>
          <option value='julia'>julia</option>
          <option value='markdown'>markdown</option>
          <option value='scala'>scala</option>
          <option value='swift'>swift</option>
        </select>
      </div>
    )
  }
}
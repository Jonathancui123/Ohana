import React from 'react';
import Icon from './Icon';
import './icons.css';
import '../fonts/all';

export default class Menu extends React.Component {
    print () {
        console.log("click")
    }

    render () {
        return(
          <div className='menu'>
            <Icon id='copy' onClick={this.props.copyClipboard} className="fas fa-copy"/>
            <Icon id='save' onClick={this.props.submit} className="fas fa-save"/>
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
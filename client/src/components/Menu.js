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
          </div>
        )
    }
}
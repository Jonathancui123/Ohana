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
          <div class='menu'>
            <Icon id='copy' onClick={this.print} class="fas fa-copy"/>
            <Icon id='save' onClick={this.print} class="fas fa-save"/>
          </div>
        )
    }
}
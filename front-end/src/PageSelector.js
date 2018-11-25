import React, { Component } from 'react';
import {BrewPage} from './BrewPage.js';
import {BrewAddUpdDelButtons} from './BrewAddUpdDelButtons.js'

class PageSelector extends Component {
  render() {
    if(this.props.selector==='Brewery'){
      return (
        <div id='PageSelected==Brewery'>
        <BrewAddUpdDelButtons />
        <BrewPage />
        </div>
      );
    } else {
      return <div id='defaultSelector'> Default </div>;
    }
  }
}

export {PageSelector};

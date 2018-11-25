import React, { Component } from 'react';
import {BrewPage} from './BrewPage.js';
import {BrewAddUpdDelButtons} from './BrewAddUpdDelButtons.js'
import Axios from 'axios';
import {BREWERY, ALL} from './const.js';

class PageSelector extends Component {
  brewAll = () => {
    Axios.get(BREWERY+ALL).then(response => {return response;});
  }

  render() {
    if(this.props.selector==='Brewery'){
      return (
        <div id='PageSelected==Brewery'>
        <BrewAddUpdDelButtons />
        <BrewPage data={this.brewAll}/>
        </div>
      );
    } else {
      return <div id='defaultSelector'> Default </div>;
    }
  }
}

export {PageSelector};

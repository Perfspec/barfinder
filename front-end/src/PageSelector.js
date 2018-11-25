import React, { Component } from 'react';
import BrewPage from './BrewPage.js';
import BrewAddUpdButtons from './BrewAddUpdButtons.js'




class PageSelector extends Component {
  render() {
    if(this.props.selector==='Brewery'){
      return (
        <div id='PageSelected==Brewery'>
        <BrewAddUpdButtons />
        <BrewPage />
        </div>
      );
    } else {
      return <div id='defaultSelector'> Default </div>;
    }
  }
}

export default PageSelector;

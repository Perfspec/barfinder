import React, { Component } from 'react';
import BreweryPage from './BreweryPage';



class PageSelector extends Component {
  render() {
    if(this.props.selector==='Brewery'){
      return (
        <BreweryPage />
      );
    } else {
      return <div> Default </div>;
    }
  }
}

export default PageSelector;

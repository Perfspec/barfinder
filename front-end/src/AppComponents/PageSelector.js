import React from 'react';
import Axios from 'axios';
import {BAR, BREWERY, DRINK, OFFER, ALL} from '../const';

class PageSelector extends React.Component {
  barAll = () => {
    Axios.get(BAR+ALL).then(response => {return response;});
  }

  brewAll = () => {
    Axios.get(BREWERY+ALL).then(response => {return response;});
  }

  drinkAll = () => {
    Axios.get(DRINK+ALL).then(response => {return response;});
  }

  offerAll = () => {
    Axios.get(OFFER+ALL).then(response => {return response;});
  }

  render() {
    if(this.props.selector==='Bar'){
      return ( <div id={this.props.id}> {(e) => this.barAll(e)} </div> );
    }
    else if(this.props.selector==='Brewery'){
      return ( <div id={this.props.id}>{(e) => this.brewAll(e)}</div> );
    }
    else if(this.props.selector==='Drink'){
      return ( <div id={this.props.id}>{(e) => this.drinkAll(e)}</div> );
    }
    else if(this.props.selector==='Offer'){
      return ( <div id={this.props.id}>{(e) => this.offerAll(e)}</div> );
    }
    else {
      return <div id={this.props.id}> Default </div>;
    }
  }
}

export {PageSelector};

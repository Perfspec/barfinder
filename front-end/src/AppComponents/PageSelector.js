import React, { Component } from 'react';
import Axios from 'axios';
import {BAR, BREWERY, DRINK, OFFER, ALL} from './const.js';

class PageSelector extends Component {
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
      return ( <div id='PageSelected==Bar'> {(e) => this.barAll(e)} </div> );
    }
    else if(this.props.selector==='Brewery'){
      return ( <div id='PageSelected==Brewery'>{(e) => this.brewAll(e)}</div> );
    }
    else if(this.props.selector==='Drink'){
      return ( <div id='PageSelected==Drink'>{(e) => this.drinkAll(e)}</div> );
    }
    else if(this.props.selector==='Offer'){
      return ( <div id='PageSelected==Offer'>{(e) => this.offerAll(e)}</div> );
    }
    else {
      return <div id='defaultSelector'> Default </div>;
    }
  }
}

export {PageSelector};

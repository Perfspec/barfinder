import React, { Component } from 'react';
import {PageSelector} from './AppComponents/PageSelector.js';



class App extends Component {
  constructor(){
    super();
    this.state={
      selector: 'Brewery'
    }
    this.selectPage=this.selectPage.bind(this);
  }

  selectPage = (input) => { this.setState({selector: input}) }

  render() {
    return (
      <div>
        <div id="selectPageButtons">
          <button onClick={this.selectPage('Bar')}>Bars</button>
          <button onClick={this.selectPage('Brewery')}>Breweries</button>
          <button onClick={this.selectPage('Drink')}>Drinks</button>
          <button onClick={this.selectPage('Offer')}>Offers</button>
        </div>
        <PageSelector selector={this.state.selector} />
      </div>
    );
  }
}

export default App;

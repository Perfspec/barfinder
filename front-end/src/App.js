import React, { Component } from 'react';
import {PageSelector} from './PageSelector.js';



class App extends Component {
  constructor(){
    super();
    this.state={
      selector: 'Brewery'
    }
  }
  render() {
    return (
      <div>
        <button id='BarSelector' onClick={() => this.setState({selector: 'Bar'})}>Bar</button>
        <button id='BrewerySelector' onClick={() => this.setState({selector: 'Brewery'})}>Brewery</button>

        <PageSelector selector={this.state.selector} />
      </div>
    );
  }
}

export default App;

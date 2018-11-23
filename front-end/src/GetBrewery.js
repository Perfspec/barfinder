import React, { Component } from 'react';
import axios from 'axios';
import {BREWERY, GET} from 'const';
const preUrl=BREWERY+GET;

class GetBrewery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '0',
      name: "default name",
      logoUrl: "default logoUrl"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    axios.get(preUrl+this.props.id).then(response => this.setState({
      idBar: response.idBar,
      name: response.name,
      logoUrl: response.logoUrl}));
  }

  render() {
    return (
      <div className="BreweryOutput">
        <p onChange={this.handleChange}>{this.state.name}</p>
        <img src={this.state.logoUrl} alt="nothing to show" onChange={this.handleChange}/>
      </div>
    );
  }
}

export default GetBrewery;

import React, {Component} from 'react';
import {BootstrapTable} from 'react-bootstrap-table-next';
import {get} from './BrewFuncs.js';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const columns = [{
  dataField: 'idBrewery',
  text: 'Brewery ID'
}, {
  dataField: 'name',
  text: 'Brewery Name'
}, {
  dataField: 'logoUrl',
  text: 'Brewery Price'
},{
  dataField: 'button',
}];

const data=[{
  "idBrewery":1,
  "name":"Harveys",
  "logoUrl":"https://pbs.twimg.com/profile_images/859330003103862784/zS4k0gJG.jpg"
},{
  "idBrewery":2,
  "name":"Harveys",
  "logoUrl":"https://pbs.twimg.com/profile_images/859330003103862784/zS4k0gJG.jpg"
}];

class BrewPage extends Component {

    render() {
      return <BootstrapTable id='BrewPage' keyField='id' data={ data } columns={ columns } />;
    }
}

export default BrewPage;

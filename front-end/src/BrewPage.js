import React, {Component} from 'react';
import {BootstrapTable} from 'react-bootstrap-table-next';
import {all} from './BrewFuncs.js';
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

class BrewPage extends Component {

    render() {
      return <BootstrapTable id='BrewPage' keyField='id' data={ all() } columns={ columns } />;
    }
}

export default BrewPage;

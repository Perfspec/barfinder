import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table-next';
import {All} from './BrewFuncs.js';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const getAll = All();

const cellEditProp = {
  mode: 'click'
};

class BrewPage extends Component {

    render() {
      return <BootstrapTable data={ getAll } cellEdit={ cellEditProp }>
          <TableHeaderColumn dataField='idBrewery' isKey>id</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>name</TableHeaderColumn>
          <TableHeaderColumn dataField='logoUrl'>logoUrl</TableHeaderColumn>
      </BootstrapTable>
    }
}

export {BrewPage};

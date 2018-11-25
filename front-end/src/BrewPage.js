import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table-next';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const getAll = [{
  "idBrewery":1,
  "name":"Harveys",
  "logoUrl":"https://pbs.twimg.com/profile_images/859330003103862784/zS4k0gJG.jpg"
},{
  "idBrewery":2,
  "name":"BrewDog",
  "logoUrl":"https://pbs.twimg.com/profile_images/586475073034330112/kNHqVAx6_400x400.jpg"
}];

const cellEditProp = {
  mode: 'click'
};

class BrewPage extends Component {

    render() {
      return (
        <BootstrapTable data={ getAll } cellEdit={ cellEditProp }>
          <TableHeaderColumn dataField='idBrewery' isKey>id</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>name</TableHeaderColumn>
          <TableHeaderColumn dataField='logoUrl'>logoUrl</TableHeaderColumn>
        </BootstrapTable>
            );
    }
}

export {BrewPage};

import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

class BrewPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      tableArray: this.props.data
    }
  }


  render() {
    return (
      <BootstrapTable
        id="tableList"
        data={this.state.tableArray}
        className="table table-striped"
        search
        scrollable >

        <TableHeaderColumn
          width= '100'
          dataField='idBrewery'
          isKey
          dataSort
          dataAlign='center'>
          Id
        </TableHeaderColumn>

        <TableHeaderColumn
          width= '100'
          dataField='name'
          dataSort
          dataAlign='center'>
          Name
        </TableHeaderColumn>

        <TableHeaderColumn
          width= '200'
          dataField='logoUrl'
          dataSort
          dataAlign='center'>
          Logo
        </TableHeaderColumn>
        
      </BootstrapTable>
    );
  }
}

export {BrewPage};

import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table-next';
import {all, del} from './BrewFuncs.js';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

export default class BrewPage extends Component {

    constructor(props){
        super(props);
        this.state={
            data: [],
            options :{
            defaultSortName: 'id',
            defaultSortOrder : 'desc'
            }
        }
    }

    populateTable = () => {
      var data = all();
      this.setState({
        data: data
      });
    }

    cellButton(cell, row) {
        return (
           <button type="button" onClick={() => del(row.id)}>
           Delete Player
           </button>
        )
}

    componentWillMount(){
        this.populateTable();
        this.setState({defaultSortName: 'id',
        defaultSortOrder: 'desc'});
}

    render() {
      return (
            <div id='BrewPage'>
                <p id='Confirm Del'></p>
                <BootstrapTable data={this.state.data} options={this.state.options} className='table table-striped responsive'>
                    <TableHeaderColumn dataField='idBrewery' isKey>Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='logoUrl' dataSort={true}>Logo</TableHeaderColumn>
                    <TableHeaderColumn dataField='button' dataFormat={this.cellButton}/>
                </BootstrapTable>
            </div>
        );
    }
}

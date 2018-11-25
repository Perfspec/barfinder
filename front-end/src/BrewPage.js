import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {all, del} from './BrewFuncs.js';

export default class BrewPage extends Component {

    constructor(props){
        super(props);
        this.state={
            options :{
            defaultSortName: 'id',
            defaultSortOrder : 'desc'
            }
        }
    }

    populateTable = () => {
      var data = all;
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
                <BootstrapTable data={this.state.players} options={this.state.options} className='topTable'>
                    <TableHeaderColumn dataField='id' isKey>Player ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='logoUrl' dataSort={true}>Logo</TableHeaderColumn>
                    <TableHeaderColumn dataField='button' dataFormat={this.cellButton}/>
                </BootstrapTable>
            </div>
        );
    }
}

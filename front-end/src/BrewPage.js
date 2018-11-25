import React, {Component} from 'react';
import {BootstrapTable} from 'react-bootstrap-table-next';
import {all, del} from './BrewFuncs.js';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class BrewPage extends Component {

    constructor(props){
        super(props);
        this.state={
            data: [],
            options :{
            defaultSortName: 'id',
            defaultSortOrder : 'desc'
            }
        }

        this.columns = [{
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
                <BootstrapTable keyField='id' data={ this.state.data } columns={ this.columns } />
            </div>
        );
    }
}

export default BrewPage;

import React, {Component} from 'react';
import Axios from 'axios';
import {BREWERY, ADD, GET, ALL, UPD, DEL} from './const.js';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class BreweryPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      entity : {
        id:'1',
        name:'BrewDog',
        logoUrl:'https://images.universe.com/fc1565a7-cd4e-46d4-82fd-d46d9db07592/-/inline/yes/'
      },
      whichGet : 'all',
      options : {
        defaultSortName: 'id',
        defaultSortOrder : 'desc'
      }
    };

    this.add = () => {
      Axios.post(BREWERY+ADD, {
        name : document.getElementById('NameBrewery').value,
        logoUrl: document.getElementById('LogoBrewery').value
      }).then(response => {
          window.alert(response.data.message);
      })
    }

    this.get = (id) => {
      Axios.get(BREWERY+GET+id).then(response => { this.setState({entity: response.data})});
    }

    this.all = () => {
      Axios.get(BREWERY+ALL).then(response => { this.setState({entity: response.data})});
    }

    this.upd = (id) => {
      Axios.put(BREWERY+UPD+id, {
        name : document.getElementById('NameBrewery').value,
        logoUrl: document.getElementById('LogoBrewery').value
      }).then(response => {
          window.alert(response.data.message);
      });
    }

    this.del = (id) => {
      Axios.delete(BREWERY+DEL+id).then(response => {
          window.alert(response.data.message);
      })
    }
  }

  populateTable = () => {
    if(this.state.whichGet==='all') {
      return this.all();
    } else {
      return this.get(this.state.whichGet);
    }
  }

  cellButton(cell, row) {
    return (
      <div>
        <button type="button" onClick={() => this.add}>
        Create
        </button>
        <button type="button" onClick={() => this.upd(row.id)}>
        Update
        </button>
        <button type="button" onClick={() => this.del(row.id)}>
        Delete
        </button>
      </div>
    );
  }

  componentWillMount(){
    this.populateTable();
    this.setState({defaultSortName: 'id',
    defaultSortOrder: 'desc'});
  }

  render(){
    return(
    <div>
      <button type="button" onClick={() => this.get(document.getElementById('idBrewery').value)}>
      Get by id
      </button>
      <button type="button" onClick={() => this.setState({whichGet: 'all'})}>
      Get all
      </button>
      <form id='GetBreweryForm'>
        <input id='idBrewery' type='text' placeholder='ID'/>
        <input id='NameBrewery' type='text' placeholder='Name'/>
        <input id='LogoBrewery' type='text' placeholder='Logo Url'/>
      </form>
      <BootstrapTable data={this.entity} options={this.state.options} className='topTable'>
        <TableHeaderColumn dataField='id' isKey>Id</TableHeaderColumn>
        <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='logo' dataSort={true}>Logo</TableHeaderColumn>
        <TableHeaderColumn dataField='button' dataFormat={this.cellButton}/>
      </BootstrapTable>
    </div>);
  }
}

export default BreweryPage;

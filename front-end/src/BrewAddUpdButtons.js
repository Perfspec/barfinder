import React, {Component} from 'react';
import {add, upd, get} from './BrewFuncs.js';

export default class BrewAddUpdDelButtons extends Component {
    constructor(props){
        super(props);
        this.state = {
          id : 0,
          name : 'DefaultName',
          logoUrl: 'DefaultLogo',
          buttonWorks : false};
    }

    handleClick = () => {
      var data = get(document.getElementById('Upd Id').value);
      this.setState({id : data.id, name : data.name, logoUrl: data.logoUrl, buttonWorks : true});
    }

    render(){
        return(
            <div id='BrewAddUpdDelButtons'>
                <form id='Add Form' onSubmit={add}>
                    <input id='Add Name' type='text' placeholder={this.state.name}/>
                    <input id='Add Logo' type='text' placeholder={this.state.logoUrl}/>
                    <input id='Add Submit' type='submit' value='Add'/>
                </form>
                <form id='Upd Form' onSubmit = {upd}>
                    <input id = 'Upd Id' type = 'number' placeholder ={this.state.id} />
                    <input id = 'Upd Name' type = 'text' placeholder={this.state.name}/>
                    <input id = 'Upd Logo' type = 'text' placeholder={this.state.logoUrl}/>
                    <input id = 'Upd Submit' type = 'submit' value = 'Update' disabled={this.state.buttonWorks}/>
                </form>
                <br/>
                <p id = 'Confirm AddUpd'></p>
            </div>
        );
    }
}

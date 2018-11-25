import React, {Component} from 'react';
import {add, upd, del, get} from './BrewFuncs.js';

class BrewAddUpdDelButtons extends Component {
    constructor(props){
        super(props);
        this.state = {
          id : 0,
          name : 'DefaultName',
          logoUrl: 'DefaultLogo'
        };
    }

    handleClick = () => {
      var data = get(document.getElementById('Upd Id').value);
      this.setState({id : data.id, name : data.name, logoUrl: data.logoUrl});
    }

    render(){
        return(
            <div id='BrewAddUpdDelButtons'>
                <form id='Add Form' onSubmit={add}>
                    <input id='Add Name' type='text' placeholder='Name'/>
                    <input id='Add Logo' type='text' placeholder='Logo Url'/>
                    <input id='Add Submit' type='submit' value='Add'/>
                </form>
                <br></br>
                <form id='Upd Form' onSubmit = {upd}>
                    <input id = 'Upd Id' type = 'number' placeholder ='Id'/>
                    <input id = 'Upd Name' type = 'text' placeholder='Name'/>
                    <input id = 'Upd Logo' type = 'text' placeholder='Logo Url'/>
                    <input id = 'Upd Submit' type = 'submit' value = 'Update'/>
                </form>
                <br></br>
                <form id='Del Form' onSubmit = {del}>
                    <input id = 'Del Id' type = 'number' placeholder ='Id'/>
                    <input id = 'Del Submit' type = 'submit' value = 'Delete'/>
                </form>
                <br></br>
                <p id = 'Confirm'></p>
            </div>
        );
    }
}
export {BrewAddUpdDelButtons};

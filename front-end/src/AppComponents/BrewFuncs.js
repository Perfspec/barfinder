import Axios from 'axios';
import {BREWERY, ADD, GET, ALL, UPD, DEL} from './const';

export const Add = (event) => {
    event.preventDefault();
    Axios.post(BREWERY+ADD, {
      name : document.getElementById('Add Name').value,
      logoUrl: document.getElementById('Add Logo').value
    }).then(response => {
        document.getElementById('Confirm').innerHTML = response.message;
    })
    window.location.reload();
}


export function Get(id) {
  Axios.get(BREWERY+GET+id).then(response => { return response;});
}

export const All = () => {
  Axios.get(BREWERY+ALL).then(response => {return response;});
}

export function Del(event){
    event.preventDefault();
    Axios.delete(BREWERY+DEL+document.getElementById('Del Id').value).then(response => {
        document.getElementById('Confirm').innerHTML = response.message;
    })
    window.location.reload();
}

export function Upd(event){
    event.preventDefault();
    Axios.put(BREWERY+UPD+document.getElementById('Upd Id').value, {
      name : document.getElementById('Upd Name').value,
      logoUrl: document.getElementById('Upd Logo').value
    }).then(response => {
        document.getElementById('Confirm').innerHTML = response.message;
    })
    window.location.reload();
}

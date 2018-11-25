import Axios from 'axios';
import {BREWERY, ADD, GET, ALL, UPD, DEL, ORIGIN} from './const.js';

export const add = (event) => {
    event.preventDefault();
    Axios.post(BREWERY+ADD, {
      name : document.getElementById('Add Name').value,
      logoUrl: document.getElementById('Add Logo').value
    }).then(response => {
        document.getElementById('Confirm').innerHTML = response.data.message;
    })
    window.location.reload();
}

export function get(id) {
  Axios.get(BREWERY+GET+id,{
    headers:{'Access-Control-Allow-Origin': ORIGIN}
  }).then(response => { return response.data;});
}

export const all = () => {
  Axios.get(BREWERY+ALL,{
    headers:{'Access-Control-Allow-Origin': ORIGIN}
  }).then(response => {return response.data;});
}

export function del(event){
    event.preventDefault();
    Axios.delete(BREWERY+DEL+document.getElementById('Del Id').value).then(response => {
        document.getElementById('Confirm').innerHTML = response.data.message;
    })
    window.location.reload();
}

export function upd(event){
    event.preventDefault();
    Axios.put(BREWERY+UPD+document.getElementById('Upd Id').value, {
      name : document.getElementById('Upd Name').value,
      logoUrl: document.getElementById('Upd Logo').value
    }).then(response => {
        document.getElementById('Confirm').innerHTML = response.data.message;
    })
    window.location.reload();
}

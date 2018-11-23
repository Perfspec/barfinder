import Axios from 'axios';
import {BREWERY, ADD, GET, ALL, UPD, DEL} from './const.jsx';

export const createBrewery = (event) => {
    event.preventDefault();
    Axios.post(BREWERY+ADD, {
        name : document.getElementById('AddNameBrewery').value,
        logoUrl: document.getElementById('AddLogoBrewery').value
    }).then(response => {
        document.getElementById('Confirm Brewery').innerHTML = response.data.message;
    })
    window.location.reload();
}

export function readBrewery(idBrewery){
    Axios.get(BREWERY+GET+idBrewery).then(response => {
        return(response.data);
    })
}

export const readAllBreweries = (event) => {
  event.preventDefault();
  Axios.get(BREWERY+ALL).then(response => {
    return(response.data);
  })
}

export function deleteBrewery(idBrewery){
    Axios.delete(BREWERY+DEL+idBrewery).then(response => {
        document.getElementById('Confirm Brewery').innerHTML = response.data.message;
    })
    window.location.reload();
}

export function updateBrewery(event){
    event.preventDefault();
    Axios.put(BREWERY+DEL+document.getElementById('idBrewery').value, {
        name : document.getElementById('UpdateNameBrewery').value,
        logoUrl: document.getElementById('UpdateLogoBrewery').value
    }).then(response => {
        document.getElementById('Confirm Brewery').innerHTML = response.data.message;
    })
    window.location.reload();
}

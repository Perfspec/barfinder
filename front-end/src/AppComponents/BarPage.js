import React, {Component} from 'react';
import axios from 'axios';
import {BAR, ADD, ALL, DEL, UPD} from '../const';
import BarCard from './BarCard';

class BarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: [],
      message: 'whats the message'
    }
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.del3te = this.del3te.bind(this);
  }

  componentDidMount() {
    axios.get(BAR + ALL).then(res => {
      this.setState({bars: res.data});
    })
  }

  del3te(id) {
    if (id != null) {
      axios.delete(BAR + DEL + id).then((response) => {
        this.setState({message: response.message});
      });
    } else {
      console.log("the id was null when delete was called");
    }
  }

  create(newName, newAddress,newPostcode,
  newEasting, newNorthing, newLatitude,
  newLongitude, newLocalAuthority) {
    const allNotNull=
    newName != null &&
    newAddress != null &&
    newPostcode != null &&
    newEasting != null &&
    newNorthing != null &&
    newLatitude !=null &&
    newLongitude !=null &&
    newLocalAuthority !=null;
    if (allNotNull) {
      axios.post(BAR + ADD,
      {
      name: newName,
      address: newAddress,
      postcode: newPostcode,
      easting: newEasting,
      northing: newNorthing,
      latitude: newLatitude,
      longitude: newLongitude,
      local_authority: newLocalAuthority
      }
      ).then(response => {
        this.setState({message: response.data.message});
      });
    } else {
      this.setState({message:
        "there was a value set to in the Create Bar call"});
    }
  }

  upd(iD, newName, newAddress,newPostcode,
  newEasting, newNorthing, newLatitude,
  newLongitude, newLocalAuthority){
    axios.put(BAR + UPD + iD,
      {
      idBar: iD,
      name: newName,
      address: newAddress,
      postcode: newPostcode,
      easting: newEasting,
      northing: newNorthing,
      latitude: newLatitude,
      longitude: newLongitude,
      local_authority: newLocalAuthority
      }
  ).then(response => {
      this.setState({message: response.data.message});
    });
  }

  update(iD, newName, newAddress,newPostcode,
  newEasting, newNorthing, newLatitude,
  newLongitude, newLocalAuthority) {
    const allNotNull=
    newName != null &&
    newAddress != null &&
    newPostcode != null &&
    newEasting != null &&
    newNorthing != null &&
    newLatitude !=null &&
    newLongitude !=null &&
    newLocalAuthority !=null;
    if(allNotNull) {
      this.upd(iD, newName, newAddress,newPostcode,
      newEasting, newNorthing, newLatitude,
      newLongitude, newLocalAuthority);
    } else {
      this.setState({message: "there was a value set to null in the Update Bar call"});
    }
  }

  render() {
    const {bars} = this.state;

    const barsList = bars.length
      ? (bars.map(bar => {
        return (<div className="post-card" key={bar.idBar}>
          <BarCard bar={bar} width="200" height="200"/>
          <form>
            <button onClick={() => this.update(
                bar.idBrewery,
                document.getElementById("New Name").value,
                document.getElementById("New Logo").value
              )}>Update {bar.idBar}</button>
            <button onClick={() => this.del3te(bar.idBar)}>
            Delete {bar.idBar}</button>
          </form>
        </div>);
      }))
      : (<div>No Bars yet</div>);

    return (
    <React.Fragment>
      <form>
        <button onClick={() => this.create(
          document.getElementById("New name").value,
          document.getElementById("New address").value,
          document.getElementById("New postcode").value,
          document.getElementById("New easting").value,
          document.getElementById("New northing").value,
          document.getElementById("New latitude").value,
          document.getElementById("New longitude").value,
          document.getElementById("New local_authority").value
          )}>
          Create</button>
        <button onClick={() => this.update(
            document.getElementById("The id").value,
            document.getElementById("New name").value,
            document.getElementById("New address").value,
            document.getElementById("New postcode").value,
            document.getElementById("New easting").value,
            document.getElementById("New northing").value,
            document.getElementById("New latitude").value,
            document.getElementById("New longitude").value,
            document.getElementById("New local_authority").value
            )}>
          Update</button>
        <button onClick={() => this.del3te(
            document.getElementById("TheId").value
          )}>
          Delete</button>
        <input id="The id" type="text" placeholder="id"/>
        <input id="New name" type="text" placeholder="name"/>
        <input id="New address" type="text" placeholder="address"/>
        <input id="New postcode" type="text" placeholder="name"/>
        <input id="New easting" type="number" placeholder="name"/>
        <input id="New name" type="text" placeholder="name"/>
        <input id="New name" type="text" placeholder="name"/>
        <input id="New name" type="text" placeholder="name"/>
        <input id="New name" type="text" placeholder="name"/>
        <input id="New name" type="text" placeholder="name"/>
        <input id="New name" type="text" placeholder="name"/>
      </form>
      <div>{this.state.message}</div>
      {barsList}
    </React.Fragment>
  );
  }
}

export default BarPage;

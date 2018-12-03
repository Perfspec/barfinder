import React, {Component} from 'react';
import axios from 'axios';
import {BREWERY, ADD, ALL, DEL, UPD} from '../const';
import BrewCard from './BrewCard';

class BrewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brews: [],
      message: 'whats the message'
    }
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.del3te = this.del3te.bind(this);
  }

  componentDidMount() {
    axios.get(BREWERY + ALL).then(res => {
      this.setState({brews: res.data});
    })
  }

  del3te(id) {
    if (id != null) {
      axios.delete(BREWERY + DEL + id).then((response) => {
        this.setState({message: response.data.message});
      });
    } else {
      window.alert("the id was null when delete was called");
    }
  }

  create(newName, newLogo) {
    if (newLogo != null && newName != null) {
      axios.post(BREWERY + ADD, {
        name: newName,
        logoUrl: newLogo
      }).then(response => {
        this.setState({message: response.data.message});
      });
    } else {
      this.setState({message:
        "there were null values in the Create call"});
    }
  }

  upd(iD, newName, newLogo){
    axios.put(BREWERY + UPD + iD,
      {
      idBrewery: iD,
      name: newName,
      logoUrl: newLogo
      }
  ).then(response => {
      this.setState({message: response.data.message});
    });
  }

  update(iD, newName, newLogo) {
    if(iD != null && newLogo != null && newName != null) {
      this.upd(iD, newName, newLogo);
    } else if(iD != null && newName != null) {
      this.upd(iD, newName, this.state.brews[iD].logoUrl);
    } else if(iD != null && newLogo != null) {
      this.upd(iD, this.state.brews[iD].name, newLogo);
    } else {
      this.setState({message:
        "there was an unsuitable iD value in the Update Brewery call"});
    }
  }

  render() {
    const {brews} = this.state;

    const brewList = brews.length
      ? (brews.map(brew => {
        return (<div className="post-card" key={brew.idBrewery}>
          <BrewCard brew={brew} width="200" height="200"/>
          <form>
            <button onClick={() => this.update(
                brew.idBrewery,
                document.getElementById("New Name").value,
                document.getElementById("New Logo").value
              )}>Update {brew.idBrewery}</button>
            <button onClick={() =>
                this.del3te(brew.idBrewery)}>
                Delete {brew.idBrewery}</button>
          </form>
        </div>);
      }))
      : (<div>No Breweries yet</div>);

    return (
    <React.Fragment>
      {this.state.whole}
      <form>
        <button onClick={() => this.create(
            document.getElementById("New Name").value,
            document.getElementById("New Logo").value
          )}>
          Create</button>
        <button onClick={() => this.update(
            document.getElementById("TheId").value,
            document.getElementById("New Name").value,
            document.getElementById("New Logo").value
            )}>
          Update</button>
        <button onClick={() => this.del3te(
            document.getElementById("TheId").value
          )}>
          Delete</button>
        <button onClick={() => console.log(
            document.getElementById("TheId").value
          )}>
        Checker</button>
        <input id="TheId" type="text" placeholder="id"/>
        <input id="New Name" type="text" placeholder="name"/>
        <input id="New Logo" type="text" placeholder="logo"/>
      </form>
      <div>{this.state.message}</div>
      {brewList}
    </React.Fragment>
  );
  }
}

export default BrewPage;

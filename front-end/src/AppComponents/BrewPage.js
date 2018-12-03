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
        this.setState({message: response.message});
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
        this.setState({message: response.message});
      });
    } else {
      this.setState({message: "there were null values in the Create call"});
    }
  }

  update(iD, newName, newLogo) {
    if (iD != null && newLogo != null && newName != null) {
      axios.put(BREWERY + UPD + iD,
        {
        name: newName.value,
        logoUrl: newLogo.value
        }
    ).then(response => {
        this.setState({message: response.message});
      });
    } else {
      this.setState({message: "there were null values in the Update call"});
    }
  }

  render() {
    const {brews} = this.state;
    const idInputElement = <input id="TheId" type="text" placeholder="id"/>;
    const nameInputElement = <input id="New Name" type="text" placeholder="name"/>;
    const logoInputElement = <input id="New Logo" type="text" placeholder="logo"/>;

    function handleCreate() {
      this.create(nameInputElement, logoInputElement);
    }

    function handleUpdate(id) {
      this.update(id, nameInputElement, logoInputElement);
    }

    function handleDelete(id) {
      this.del3te(id);
    }

    const brewList = brews.length
      ? (brews.map(brew => {
        return (<div className="post-card" key={brew.idBrewery}>
          <BrewCard brew={brew} width="200" height="200"/>
          <form>
            <button onClick={() => handleUpdate(brew.idBrewery)}>Update {brew.idBrewery}</button>
            <button onClick={() => handleDelete(brew.idBrewery)}>Delete {brew.idBrewery}</button>
          </form>
        </div>);
      }))
      : (<div>No Breweries yet</div>);

    return (
    <React.Fragment>
      <form>
        <button onClick={() => handleCreate()}>
          Create</button>
        <button onClick={() => handleUpdate(idInputElement.value)}>
          Update</button>
        <button onClick={() => handleDelete(idInputElement.value)}>
          Delete</button>
        {idInputElement}
        {nameInputElement}
        {logoInputElement}
      </form>
      <div>{this.state.message}</div>
      {brewList}
    </React.Fragment>
  );
  }
}

export default BrewPage;

import React, {Component} from 'react';
import axios from 'axios';
import {DRINK, BREWERY, ADD, ALL, DEL, UPD} from '../const';
import DrinkCard from './DrinkCard';

class DrinkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brews: [],
      drinks: []
    }
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.del3te = this.del3te.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    axios.get(DRINK + ALL).then(res => {
      this.setState({drinks: res.data});
    });
    axios.get(BREWERY + ALL).then(res => {
      this.setState({brews: res.data});
    });
  }

  del3te(id) {
    if (id != null) {
      axios.delete(DRINK + DEL + id);
    }
  }

  create(newName, newLogo, newBreweryId, newABV) {
    const allNotNull=newName != null &&
    newLogo != null &&
    newBreweryId != null &&
    newABV != null;
    if (allNotNull) {
      axios.post(DRINK + ADD, {
        name: newName,
        logoUrl: newLogo,
        idBrewery: newBreweryId,
        abv: newABV
      });
    }
  }

  upd(iD, newName, newLogo, newBreweryId, newABV){
    axios.put(DRINK + UPD + iD,
      {
      idDrink: iD,
      name: newName,
      logoUrl: newLogo,
      idBrewery: newBreweryId,
      abv: newABV
      }
  );
  }

  update(iD, newName, newLogo, newBreweryId, newABV) {
    const allNotNull=iD != null &&
    newName != null &&
    newLogo != null &&
    newBreweryId != null &&
    newABV != null;
    if(allNotNull) {
      this.upd(iD, newName, newLogo, newBreweryId, newABV);
    } else if(iD != null && newName != null && newABV != null) {
      this.upd(iD, newName, this.state.drinks[iD].logoUrl, this.state.drinks[iD].idBrewery, newABV);
    } else {

    }
  }

  render() {
    const {drinks} = this.state;
    const {brews} = this.state;

    const drinkList = drinks.length
      ? (drinks.map(drink => {
        return (<div className="post-card" key={drink.idDrink}>
          <DrinkCard drink={drink} brew={brews[parseInt(drink.idBrewery)]} width="200" height="200"/>
          <form>
            <button onClick={() => this.update(
                drink.idDrink,
                document.getElementById("New Name").value,
                document.getElementById("New Logo").value,
                document.getElementById("New IdBrewery").value,
                document.getElementById("New ABV").value
              )}>Update {drink.idDrink}</button>
            <button onClick={() =>
                this.del3te(drink.idDrink)}>
                Delete {drink.idDrink}</button>
          </form>
        </div>);
      }))
      : (<div>No Drinks yet</div>);

    return (
    <React.Fragment>
      <form>
        <button onClick={() => this.create(
          document.getElementById("New Name").value,
          document.getElementById("New Logo").value,
          document.getElementById("New IdBrewery").value,
          document.getElementById("New ABV").value
          )}>
          Create</button>
        <button onClick={() => this.update(
            document.getElementById("TheId").value,
            document.getElementById("New Name").value,
            document.getElementById("New Logo").value,
            document.getElementById("New IdBrewery").value,
            document.getElementById("New ABV").value
            )}>
          Update</button>
        <button onClick={() => this.del3te(
            document.getElementById("TheId").value
          )}>
          Delete</button>
        <input id="TheId" type="text" placeholder="id"/>
        <input id="New Name" type="text" placeholder="name"/>
        <input id="New Logo" type="text" placeholder="logo"/>
        <input id="New IdBrewery" type="number" placeholder="idBrewery"/>
        <input id="New ABV" type="decimal" placeholder="abv %"/>
      </form>
      {drinkList}
    </React.Fragment>
  );
  }
}

export default DrinkPage;

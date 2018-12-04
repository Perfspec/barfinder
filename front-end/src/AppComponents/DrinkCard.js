import React from 'react';

class DrinkCard extends React.Component {

  render(){

    return(
        <div className="card">
          <span className="card-title">{this.props.drink.name}</span>
          <img
            src={this.props.drink.logoUrl}
            width={this.props.width}
            height={this.props.height}
            alt={"Link broken for idDrink="+this.props.drink.idDrink}/>
          {this.props.brew.name}
          <img
            src={this.props.brew.logoUrl}
            width={this.props.width/2}
            height={this.props.height/2}
            alt={"Link broken for idBrewery="+this.props.brew.id}/>
          {this.props.drink.abv}
        </div>
    );
  }
}
export default DrinkCard;

import React from 'react';

class BrewCard extends React.Component {
  render(){
    
    return(

        <div className="card">
          <span className="card-title">{this.props.brew.name}</span>
          <img className="brew-logo" src={this.props.brew.logoUrl}
          width={this.props.width} height={this.props.height}
          alt={"Link broken for idBrewery="+this.props.brew.id}/>
        </div>
    );
  }
}
export default BrewCard;

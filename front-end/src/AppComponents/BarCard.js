import React from 'react';

class BarCard extends React.Component {
  render(){

    return(

        <div className="card">
          <span className="card-title">{this.props.bar.name}</span>
          <br/>
          {this.props.bar.address}
          <br/>
          {this.props.bar.postcode}
          <br/>
          {this.props.bar.easting}
          <br/>
          {this.props.bar.northing}
          <br/>
          {this.props.bar.longitude}
          <br/>
          {this.props.bar.latitude}
          <br/>
          {this.props.bar.local_authority}
          <br/>
        </div>
    );
  }
}
export default BarCard;

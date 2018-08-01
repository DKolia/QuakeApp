import React, { Component } from 'react';

class Quakes extends Component {
  render() {
    console.log(this.props.foundQuakes.features);
    return (
      <div>
        {this.props.foundQuakes.features.map((x, i) =>
          <h4>{x.properties.title}</h4>
        )}
      </div>
    )
  }
}

export default Quakes;

import React, { Component } from 'react';
import Quakes from "./Quakes";

class App extends Component {
  constructor(){
    super();
    this.state = {quakeData: []}
  }

  getQuakes = async () => {
    try {
      const quakesFound = fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson")
    } catch (err) {
      return err
    }
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <Quakes />
        </div>

      </div>
    );
  }
}

export default App;

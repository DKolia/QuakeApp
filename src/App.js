import React, { Component } from 'react';
import Quakes from "./Quakes";

class App extends Component {
  constructor(){
    super();
    this.state = {quakeData: ""}
  }

  getQuakes = async () => {
    try {
      const quakesFound = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson")
      const quakesJSON = await quakesFound.json();
      return quakesJSON;
    } catch (err) {
      return err
    }
  }

  componentDidMount = () => {
    this.getQuakes().then((quakes) => {
      this.setState({quakeData: quakes})
    })
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
        </div>
        <div id="info" className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
            {(this.state.quakeData === "") ? null : <Quakes foundQuakes={this.state.quakeData}/>}
        </div>

      </div>
    );
  }
}

export default App;

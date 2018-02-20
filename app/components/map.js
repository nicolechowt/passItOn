import ReactDOM from 'react-dom';
import React, { Component } from "react";
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import API from "./utils/API";

require('./map.css');

const coffeeShopLocation = 90266;

const location1 = {
  lat: 33.980289,
  lng: -118.451745
};

const location2 = {
  lat: 34.069875,
  lng: -118.403638
};

const location3 = {
  lat: 34.0633123,
  lng: -118.44086199999998
}

const location4 ={
  lat: 34.0839049,
  lng: -118.3442521
}

const locations =[location1,location2, location3, location4];
const params = {v: '3.exp', key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'};
var screenWidth="100%";
var screenHeight=screen.height;


class GoogleMap extends Component {

  constructor(props){
    super(props);
    this.state = {apiLocations: []};
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  componentDidMount(){
    const here = this;
    console.log("hello");
    API.getStoryLocation(coffeeShopLocation)
      .then(function(res){
        here.setState({
          apiLocations: res.data
        })
      })
  }


  render() {
    return (
      <div className="map container content-section text-center">
        <h1>Top Stories</h1>
        <Gmaps
          onResize={this.onResize}
          width={screenWidth}
          height={screenHeight/2}
          lat={locations[0].lat}
          lng={locations[0].lng}
          zoom={11}
          loadingMessage={'Who are your lucky neighbors?'}
          params={params}
          onMapCreated={this.onMapCreated}>

          {this.state.apiLocations.map((item, index) =>(
            <InfoWindow
            lat={item.location[0].latitude}
            lng={item.location[0].longitude}
            content={item.title}
            key={index}
            onCloseClick={this.onCloseClick()}/>
          ))}
        </Gmaps>
      </div>

    );
  }

};

export default GoogleMap;

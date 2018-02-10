import ReactDOM from 'react-dom';
import React, { Component } from "react";
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

require('./map.css');

const location1 = {
  lat: 34.0638989,
  lng: -118.4485985
};

const location2 = {
  lat: 34.043017,
  lng: -118.267254
};

const locations =[location1,location2];
const params = {v: '3.exp', key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'};
var screenWidth="100%";
var screenHeight=screen.height;


class GoogleMap extends Component {

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
          <InfoWindow
            lat={locations[0].lat}
            lng={locations[0].lng}
            content={"Please help me move!"}
            onCloseClick={this.onCloseClick} />
          <InfoWindow
            lat={locations[1].lat}
            lng={locations[1].lng}
            content={'My dying son wants to meet Kobe.'}
            onCloseClick={this.onCloseClick} />
        </Gmaps>
      </div>

    );
  }

};

export default GoogleMap;

import ReactDOM from 'react-dom';
import React, { Component } from "react";
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import API from "./utils/API";

require('./map.css');

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

// const zipCode = "90266";
// const query = {
//   location: [{zipCode: zipCode}]
// }

// const query = {
//   _id: "5a7e9391a9122331823cffdf"
// }

// API.loadStory(query)
//     .then(function(res){
//       console.log(res.data);
//     })
//     .catch(err => console.log(err));


const locations =[location1,location2, location3, location4];
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
          <InfoWindow
            lat={locations[2].lat}
            lng={locations[2].lng}
            content={'Clean 2nd St. after parade on Sunday.'}
            onCloseClick={this.onCloseClick} />
          <InfoWindow
            lat={locations[3].lat}
            lng={locations[3].lng}
            content={'I need a beach buddy on 2/13.'}
            onCloseClick={this.onCloseClick} />
        </Gmaps>
      </div>

    );
  }

};

export default GoogleMap;

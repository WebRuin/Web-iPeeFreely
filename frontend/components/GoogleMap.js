import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const Map = styled.div`
  width: 100%;
  height: calc(100vh - 73px);
`;

class GoogleMap extends Component {
  state = {
    coords: [],
    mapCenter: { lat: 37.9521987, lng: -122.03259079999998 },
    mapZoom: 15
  };

  // if ('geolocation' in navigator) {
  //   let self = this
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     console.log('set location')
  //     self.setState({
  //       mapCenter: { lat: position.coords.latitude, lng:position.coords.longitude }
  //     })
  //   });
  // } else {
  //   console.log('not set')
  // }

  render() {
    let mapCoords = this.state.coords.map((mapCoord, index) => (
      <BathroomMarker
        style={{ height: "30px", width: "160px" }}
        key={index}
        name={mapCoord.name}
      />
    ));
    return (
      <Map>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: "AIzaSyC0ttWNm3Ttowr_f4nG1B-wUcXY6ircTUA" }}
          defaultCenter={{ lat: 37.5670279, lng: -122.3238017 }}
          center={this.state.mapCenter}
          defaultZoom={this.state.mapZoom}
        >
          {mapCoords}
        </GoogleMapReact>
      </Map>
    );
  }
}

export default GoogleMap;

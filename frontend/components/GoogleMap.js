import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import MapMarker from "./MapMarker";

const ALL_BATHROOMS_QUERY = gql`
  query ALL_BATHROOMS_QUERY {
    bathrooms {
      id
      lat
      lng
      title
      address
      description
    }
  }
`;

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

  componentDidMount() {
    if ("geolocation" in navigator) {
      let self = this;
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("set location");
        self.setState({
          mapCenter: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      });
    } else {
      console.log("not set");
    }
  }

  render() {
    return (
      <Query query={ALL_BATHROOMS_QUERY}>
        {({ data, error, loading }) => {
          console.log(data);
          if (loading) return <p>Loading..</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <Map>
              <GoogleMapReact
                // bootstrapURLKeys={{ key: "AIzaSyC0ttWNm3Ttowr_f4nG1B-wUcXY6ircTUA" }}
                defaultCenter={{ lat: 37.5670279, lng: -122.3238017 }}
                center={this.state.mapCenter}
                defaultZoom={this.state.mapZoom}
              >
                {data.bathrooms.map(bathroom => (
                  <MapMarker
                    style={{ height: "30px", width: "160px" }}
                    key={bathroom.id}
                    lat={bathroom.lat}
                    lng={bathroom.lng}
                    title={bathroom.title}
                    address={bathroom.address}
                    description={bathroom.description}
                  />
                ))}
              </GoogleMapReact>
            </Map>
          );
        }}
      </Query>
    );
  }
}

export default GoogleMap;

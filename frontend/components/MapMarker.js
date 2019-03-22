import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BathroomMarker = styled.div`
  min-width: 100px;
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
  background-color: ${props => props.theme.transGrey};
  color: ${props => props.theme.red};
  /* box-shadow: ${props => props.theme.bs}; */
`;

const AddressLine = styled.div`
  padding-top: 10px;
`;

class MapMarker extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

  render() {
    const { title, address, description } = this.props;
    return (
      <BathroomMarker>
        <FontAwesomeIcon icon="toilet" color="black" /> {title}
        <AddressLine>
          <address>{address}</address>
        </AddressLine>
        <p>{description}</p>
      </BathroomMarker>
    );
  }
}

export default MapMarker;

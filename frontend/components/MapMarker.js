import React, { Component } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BathroomMarker = styled.div`
    height: 23px;
    width: 23px;
    display: inline-block;
    overflow: hidden;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    padding: 7px;
    background-color: #3A3A3A75;
    color: #FF0000;
    border-radius: 10px;
  /* box-shadow: ${props => props.theme.bs}; */
  &:hover{
    min-width: 100px;
    display: table;
  }
`;

class MapMarker extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  };

  render() {
    const { title, address, description, id } = this.props;
    return (
      <Link
        href={{
          pathname: "/bathroom",
          query: { id }
        }}
      >
        <a>
          <BathroomMarker>
            <FontAwesomeIcon icon="toilet" color="black" /> <p>{title}</p>
            <p>
              <address>{address}</address>
            </p>
            <p>{description}</p>
          </BathroomMarker>
        </a>
      </Link>
    );
  }
}

export default MapMarker;

import React, { Component } from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Bathroom from "./Bathroom";
import Error from "./ErrorMessage";

const ALL_BATHROOMS_QUERY = gql`
  query ALL_BATHROOMS_QUERY {
    bathrooms {
      id
      title
      description
      address
      image
      largeImage
    }
  }
`;

const BathroomList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 4rem 2rem;
`;

class Bathrooms extends Component {
  render() {
    return (
      <Query query={ALL_BATHROOMS_QUERY}>
        {({ data, error, loading }) => {
          console.log(data);
          if (loading) return <p>Loading</p>;
          if (error) return <Error error={error} />;
          return (
            <Inner>
              <BathroomList>
                {data.bathrooms.map(bathroom => (
                  <Bathroom bathroom={bathroom} key={bathroom.id} />
                ))}
              </BathroomList>
            </Inner>
          );
        }}
      </Query>
    );
  }
}

export default Bathrooms;
export { ALL_BATHROOMS_QUERY };

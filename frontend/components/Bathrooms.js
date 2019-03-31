import React, { Component } from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Bathroom from "./Bathroom";
import Error from "./ErrorMessage";
import Pagination from "./Pagination";
import { perPage } from "../config";

const ALL_BATHROOMS_QUERY = gql`
  query ALL_BATHROOMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    bathrooms(first: $first, skip: $skip, orderBy: createdAt_DESC) {
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

const Center = styled.div`
  text-align: center;
`;

class Bathrooms extends Component {
  render() {
    return (
      <Center>
        <Pagination page={this.props.page} />
        <Query
          query={ALL_BATHROOMS_QUERY}
          variables={{
            skip: this.props.page * perPage - perPage,
            first: perPage
          }}
        >
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
        <Pagination page={this.props.page} />
      </Center>
    );
  }
}

export default Bathrooms;
export { ALL_BATHROOMS_QUERY };

import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import Inner from './styles/Inner';

const SINGLE_BATHROOM_QUERY = gql`
  query SINGLE_BATHROOM_QUERY($id: ID!) {
    bathroom(where: { id: $id }) {
      id
      title
      address
      description
      largeImage
    }
  }
`;

const SingleBathroomStyles = styled.div`
  max-width: 1200px;
  min-height: 800px;
  margin: 2rem auto;
  box-shadow: {prop => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .details {
    margin: 3rem;
    font-size: 2rem;
    
  }
`;

class SingleBathroom extends Component {
  render() {
    return (
      <Query
        query={SINGLE_BATHROOM_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading ...</p>;
          if (!data.bathroom)
            return <p>No bathroom found for {this.props.id}</p>;
          const bathroom = data.bathroom;
          return (
            <Inner>
              <SingleBathroomStyles>
                <Head>
                  <title>iPeeFreely | {bathroom.title}</title>
                </Head>
                <img src={bathroom.largeImage} alt={bathroom.title} />
                <div className="details">
                  <h2>Viewing {bathroom.title}</h2>
                  <p>{bathroom.description}</p>
                </div>
              </SingleBathroomStyles>
            </Inner>
          );
        }}
      </Query>
    );
  }
}

export default SingleBathroom;

import React, { Component } from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Bathroom from './Bathroom'

const ALL_BATHROOMS_QUERY = gql`
  query ALL_BATHROOMS_QUERY {
    bathrooms {
      id
      title
      description
      address
    }
  }
`

const BathroomList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`

class Bathrooms extends Component {
  render () {
    return (
      <div>
        <p>Bathrooms</p>
        <Query query={ALL_BATHROOMS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading..</p>
            if (error) return <p>Error: {error.message}</p>
            return (
              <BathroomList>
                {data.bathrooms.map(bathroom => <Bathroom bathroom={bathroom} key={bathroom.id} />)} 
              </BathroomList>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default Bathrooms

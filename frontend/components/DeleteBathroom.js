import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ALL_BATHROOMS_QUERY } from "./Bathrooms";

const DELETE_BATHROOM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteBathroom(id: $id) {
      id
    }
  }
`;

class DeleteBathroom extends Component {
  update = (cache, payload) => {
    // 1. Read the cache for the items we want
    const data = cache.readQuery({ query: ALL_BATHROOMS_QUERY });
    // 2. Filter the deleted item out of the page
    data.bathrooms = data.bathrooms.filter(
      item => item.id !== payload.data.deleteBathroom.id
    );
    // 3. Put the items back!
    cache.writeQuery({ query: ALL_BATHROOMS_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_BATHROOM_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteBathroom, { error }) => (
          <button
            onClick={() => {
              if (confirm("Are you sure you want to delete this bathroom?")) {
                deleteBathroom();
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteBathroom;

import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const DELETE_BATHROOM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteBathroom(id: $id) {
      id
    }
  }
`;

class DeleteBathroom extends Component {
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

import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";

class CreateBathroom extends Component {
  state = {
    title: "",
    description: "",
    address: ""
  };

  handleChange = e => {
    console.log(e);
  };

  render() {
    return (
      <Form>
        <fieldset>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
      </Form>
    );
  }
}

export default CreateBathroom;

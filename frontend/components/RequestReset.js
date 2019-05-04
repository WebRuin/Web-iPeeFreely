import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import Inner from './styles/Inner';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

class RequestReset extends Component {
  state = {
    email: ''
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
        {(reset, { error, loading, called }) => (
          <Inner>
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await reset();
                this.setState({
                  password: ''
                });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Request passwor reset</h2>
                <Error error={error} />
                {!error && !loading && called && (
                  <p>
                    Success!! Check you email for a reset link. I pray it is not
                    in SPAM
                  </p>
                )}
                <lable htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.saveToState}
                  />
                </lable>
                <button type="submit">Request Reset!</button>
              </fieldset>
            </Form>
          </Inner>
        )}
      </Mutation>
    );
  }
}

export default RequestReset;

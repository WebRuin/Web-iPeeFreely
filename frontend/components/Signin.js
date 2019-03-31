import React, { Component } from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 4rem 2rem;
`;

class Signin extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => (
          <Inner>
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await signup();
                this.setState({
                  name: "",
                  email: "",
                  password: ""
                });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Sign into your account</h2>
                <Error error={error} />
                <lable htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.saveToState}
                  />
                </lable>
                <lable htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                </lable>
                <button type="submit">Sign In!</button>
              </fieldset>
            </Form>
          </Inner>
        )}
      </Mutation>
    );
  }
}

export default Signin;

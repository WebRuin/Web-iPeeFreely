import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import Form from "./styles/Form";
import Error from "./ErrorMessage";

const SINGLE_BATHROOM_QUERY = gql`
  query SINGLE_BATHROOM_QUERY($id: ID!) {
    bathroom(where: { id: $id }) {
      id
      title
      description
      address
    }
  }
`;

const UPDATE_BATHROOM_MUTATION = gql`
  mutation UPDATE_BATHROOM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $address: String
    $lat: Float
    $lng: Float
  ) {
    updateBathroom(
      id: $id
      title: $title
      description: $description
      address: $address
      lat: $lat
      lng: $lng
    ) {
      id
      title
      description
      address
      lat
      lng
    }
  }
`;

class UpdateBathroom extends Component {
  state = { address: "" };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({
      [name]: val
    });
  };

  handleAddressChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        const { lat, lng } = latLng;
        this.setState({
          lat,
          lng
        });
      })
      .catch(error => console.error("Error", error));
  };

  updateBathroom = async (e, updateBathroomMutation) => {
    e.preventDefault();
    const res = await updateBathroomMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
    console.log("Updated!!!");
  };

  render() {
    return (
      <Query
        query={SINGLE_BATHROOM_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.bathroom)
            return <p>No bathroom found for ID {this.props.id}</p>;
          return (
            <Mutation
              mutation={UPDATE_BATHROOM_MUTATION}
              variables={this.state}
            >
              {(updateBathroom, { error, loading }) => (
                <Form onSubmit={e => this.updateBathroom(e, updateBathroom)}>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="title">
                      Title
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        required
                        defaultValue={data.bathroom.title}
                        onChange={this.handleChange}
                      />
                    </label>

                    <lable htmlFor="address">
                      Address
                      <PlacesAutocomplete
                        defaultValue={data.bathroom.address}
                        onChange={this.handleAddressChange}
                        onSelect={this.handleSelect}
                      >
                        {({
                          getInputProps,
                          suggestions,
                          getSuggestionItemProps,
                          loading
                        }) => (
                          <div>
                            <input
                              {...getInputProps({
                                name: "address",
                                required: true,
                                placeholder: "Address",
                                className: "location-search-input"
                              })}
                              defaultValue={data.bathroom.address}
                            />
                            <div className="autocomplete-dropdown-container">
                              {loading && <div>Loading...</div>}
                              {suggestions.map(suggestion => {
                                const className = suggestion.active
                                  ? "suggestion-item--active"
                                  : "suggestion-item";
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                  ? {
                                      backgroundColor: "#fafafa",
                                      cursor: "pointer"
                                    }
                                  : {
                                      backgroundColor: "#ffffff",
                                      cursor: "pointer"
                                    };
                                return (
                                  <div
                                    {...getSuggestionItemProps(suggestion, {
                                      className,
                                      style
                                    })}
                                  >
                                    <span>{suggestion.description}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </PlacesAutocomplete>
                    </lable>
                    <label htmlFor="description">
                      Description
                      <textarea
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Please describe the bathroom"
                        required
                        defaultValue={data.bathroom.description}
                        onChange={this.handleChange}
                      />
                    </label>
                    <button type="submit">
                      Sav{loading ? "ing" : "e"} Changes
                    </button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateBathroom;
export { UPDATE_BATHROOM_MUTATION };

import React, { Component } from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import gql from "graphql-tag";
import Router from "next/router";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import Form from "./styles/Form";
import Error from "./ErrorMessage";

const CREATE_BATHROOM_MUTATION = gql`
  mutation CREATE_BATHROOM_MUTATION(
    $title: String!
    $description: String!
    $address: String!
    $lat: Float
    $lng: Float
    $image: String # $largeImage: String
  ) {
    createBathroom(
      title: $title
      description: $description
      address: $address
      lat: $lat
      lng: $lng
      image: $image
      largeImage: $image
    ) {
      id
    }
  }
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 4rem 2rem;
`;

class CreateBathroom extends Component {
  state = {
    title: "",
    description: "",
    address: "",
    image: "",
    largeImage: "",
    lat: "",
    lng: ""
  };

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

  uploadFile = async e => {
    console.log("uploading file...");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "iPeeFreely");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/tihos/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    console.log(file);
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  };

  render() {
    return (
      <Mutation mutation={CREATE_BATHROOM_MUTATION} variables={this.state}>
        {(createBathroom, { error, loading }) => (
          <Inner>
            <Form
              onSubmit={async e => {
                // Stop the form from submiting
                e.preventDefault();
                // Call the mutation
                const res = await createBathroom();
                // Change use to single item page
                console.log(res);
                Router.push({
                  pathname: "/bathroom",
                  query: { id: res.data.createBathroom.id }
                });
              }}
            >
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="file">
                  Image
                  <input
                    type="file"
                    id="file"
                    name="file"
                    placeholder="Upload an image"
                    required
                    onChange={this.uploadFile}
                  />
                  {this.state.image && (
                    <img
                      width="200"
                      src={this.state.image}
                      alt="Upload Preview"
                    />
                  )}
                </label>

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

                <lable htmlFor="address">
                  Address
                  <PlacesAutocomplete
                    value={this.state.address}
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

                {/* <label htmlFor="address">
                Address
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  required
                  value={this.state.address}
                  onChange={this.handleChange}
                  onBlur={this.getCoords}
                />
              </label> */}

                <label htmlFor="description">
                  Description
                  <textarea
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Please describe the bathroom"
                    required
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </label>
                <button type="submit">Submit</button>
              </fieldset>
            </Form>
          </Inner>
        )}
      </Mutation>
    );
  }
}

export default CreateBathroom;
export { CREATE_BATHROOM_MUTATION };

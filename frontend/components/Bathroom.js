import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";

class Bathroom extends Component {
  static propTypes = {
    bathroom: PropTypes.object.isRequired
  };

  render() {
    const { bathroom } = this.props;
    return (
      <ItemStyles>
        {bathroom.image && <img src={bathroom.image} alt={bathroom.title} />}
        <Title>
          <Link
            href={{
              pathname: "/bathroom",
              query: { id: bathroom.id }
            }}
          >
            <a>{bathroom.title}</a>
          </Link>
        </Title>
        <p>{bathroom.description}</p>
        <address>{bathroom.address}</address>
        <Link
          href={{
            pathname: "update",
            query: { id: bathroom.id }
          }}
        >
          <a>
            <p>Edit</p>
          </a>
        </Link>
        <button>Delete</button>
      </ItemStyles>
    );
  }
}

export default Bathroom;

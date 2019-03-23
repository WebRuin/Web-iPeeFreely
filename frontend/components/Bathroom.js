import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import DeleteBathroom from "./DeleteBathroom";

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
        <div className="buttonList">
          <Link
            href={{
              pathname: "update",
              query: { id: bathroom.id }
            }}
          >
            <a>Edit</a>
          </Link>
          <DeleteBathroom id={bathroom.id}>Delete this bathroom</DeleteBathroom>
        </div>
      </ItemStyles>
    );
  }
}

export default Bathroom;

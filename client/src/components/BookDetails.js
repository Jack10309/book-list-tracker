import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";
import { flowRight as compose } from "lodash";

class BookDetails extends Component {
  render() {
    return (
      <div id="book-details">
        <p>Output details go here</p>
      </div>
    );
  }
}

export default compose(graphql(getBookQuery))(BookDetails);

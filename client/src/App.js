import React, { Component } from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
  
});

export default class App extends Component {
  render() {    
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <h1>Jacksons reading list</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

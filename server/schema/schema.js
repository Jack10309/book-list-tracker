const graphql = require("graphql");
const _ = require("lodash");
const Book = require("../models/author");
const Author = require("../models/author");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
        type: AuthorType,
        resolve(parent, args){
          //  return _.find(author, { id: parent.authorId })
        }
    }
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },    
    books: {
        type: new GraphQLList(BookType),
        resolve(parent, args){
          //  return _.filter(book, { authorId: parent.id})
        }
    }
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db/other source 
      //  return _.find(book, { id: args.id });
      },
    },

    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db/other source
      //  return _.find(author, { id: args.id });
      },
    },

    books: {
        type: new GraphQLList(BookType),
        resolve(parent, args) {
          //  return book;
        }
    },

    authors: {
        type: new GraphQLList(AuthorType),
        resolve(parent, args) {
            return author;
        } 
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

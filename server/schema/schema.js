const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = graphql;

// dummy data
let book = [
  { name: "Name of the wind", genre: "Fantasy", id: "1", authorId: "1" },
  { name: "The mad man horses", genre: "Action", id: "2", authorId: "2" },
  { name: "Star wars", genre: "Fantasy", id: "3", authorId: "3" },
];

let author = [
  { name: "Stone Mandison", age: 34, id: "1" },
  { name: "Lisa Ann", age: 26, id: "2" },
  { name: "Baba Kunle", age: 74, id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
        type: AuthorType,
        resolve(parent, args){
            return _.find(author, { id: parent.authorId })
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
        return _.find(book, { id: args.id });
      },
    },

    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db/other source
        return _.find(author, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://Jackson:memory59@graphql.y82si.mongodb.net/graphql?retryWrites=true&w=majority');
mongoose.connection.once('open',()=>{
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(4000, () => console.log('Now listening to request on port 4000'))
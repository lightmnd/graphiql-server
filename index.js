import express from 'express';
import bodyParser from 'body-parser';
import {graphiqlExpress, graphqlExpress} from 'apollo-server-express';
import {find, filter} from 'lodash';
import mongoose from 'mongoose';

import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema.js';
import resolvers from './resolver.js';


export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

mongoose.connect('mongodb://localhost/test');

const Author = mongoose.model('Author', {fName: String, lName: String});

const PORT = 3000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({schema, context: {Author}}));


app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

                                                                                                                                                                                                                                                                                                  
app.listen(PORT)
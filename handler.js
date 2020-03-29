const { ApolloServer, gql } = require('apollo-server-lambda');
const { resolvers } = require('./config/resolvers');
const { typeDefs } = require('./config/typeDefs');
const { taskModel } = require('./db');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: error => {
        console.log(error);
        return error;
    }
});

exports.graphqlHandler = server.createHandler({
    cors: {
        origin: '*',
        credentials: true,
    }
});

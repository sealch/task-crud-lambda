const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
    type Task {
        id: ID!
        name: String!
        done: Boolean!
    }
    
    type Query {
        allTasks: [Task!]
    }
    
    type Mutation {
        createTask(name: String!, done: Boolean!): Task! 
        deleteTask(id: ID!): Task
        updateTask(id: ID!, done: Boolean!): Task!
    }
`;

module.exports = {
    typeDefs
};

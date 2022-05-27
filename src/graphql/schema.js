const {gql} = require('apollo-server');

const typeDefs = gql`
    type BoilerPlate { 
        id: ID!
    }
    
    type Query {
        boilerplate: [BoilerPlate]
    }
`;

module.exports = typeDefs;

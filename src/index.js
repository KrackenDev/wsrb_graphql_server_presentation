const { ApolloServer } = require("apollo-server")
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

//This is here just for local testing purposes. Gets rid of self-signed cert error.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function startApolloServer(typeDefs, resolvers) {
    const server = new ApolloServer({typeDefs, resolvers, dataSources: () => {}});

    const { url, port } = await server.listen({port: process.env.PORT || 4000});
    console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `);
}

startApolloServer(typeDefs, resolvers);

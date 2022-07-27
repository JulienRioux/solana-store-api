var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a = require('apollo-server-lambda'), ApolloServer = _a.ApolloServer, gql = _a.gql;
var ApolloServerPluginLandingPageLocalDefault = require('apollo-server-core').ApolloServerPluginLandingPageLocalDefault;
// Construct a schema, using GraphQL schema language
var typeDefs = gql(__makeTemplateObject(["\n  type Query {\n    hello: String\n  }\n"], ["\n  type Query {\n    hello: String\n  }\n"]));
// Provide resolver functions for your schema fields
var resolvers = {
    Query: {
        hello: function () { return 'Hello world!'; },
    },
};
var server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});
exports.graphqlHandler = server.createHandler();
//# sourceMappingURL=graphql.js.map
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./types";
import resolvers from "./resolvers/resolver";

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
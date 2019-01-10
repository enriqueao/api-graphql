import { mergeTypes } from "merge-graphql-schemas";

import User from ".";

const typeDefs = [User];

export default mergeTypes(typeDefs, { all: true });
import { mergeTypes } from "merge-graphql-schemas";

import Market from "./Market";
import Price from "./Prices";
import Product from "./Product";

const typeDefs = [Market, Price, Product];

export default mergeTypes(typeDefs, { all: true });
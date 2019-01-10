export default `
  type Market {
    id: Int!
    marketName: String!
    marketLogo: String!
  }
  type Query {
    market(id: String!): Market
    market: [Market]
  }
  type Mutation {
    addMarket(id: Int!, marketName: String!, marketLogo: String!): Market
  }
`;
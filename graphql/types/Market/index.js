export default `
  type Market {
    id: String!
    marketName: String!
    marketLogo: String!
  }
  type Query {
    market(name: String!): Market
    markets: [Market]
  }
  type Mutation {
    addMarket(marketName: String!, marketLogo: String!): Market
  }
`;
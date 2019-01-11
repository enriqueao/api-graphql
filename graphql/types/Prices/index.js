export default `
  type Price {
    id: String!
    market: Market
    price: String!
  }
  type Query {
    price(idProduct: String!): [Price]
  }
`;
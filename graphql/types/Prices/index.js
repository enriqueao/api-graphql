export default `
  type Price {
    id: String!
    idProduct: String!
    price: Float!
  }
  type Query {
    price(idProduct: String!): [Price]
  }
`;
export default `
  type Product {
    id: String!
    format: String!
    description: String!
    upc: String!
    pic: String!
    prices: [Price]
  }
  type ProductUpdate {
    id: String!
    format: String!
    description: String!
    upc: String!
    pic: String!
    prices: [ID!]
  }
  type Query {
    product(description: String!): [Product]
    products: [Product]
  }
  type Mutation {
    addProduct(format: String!, description: String!, upc: String!, pic: String!, price: String!, market: String!): Product
    addPriceProduct(upc: String!, price: String!, market: String!): ProductUpdate
  }
`;
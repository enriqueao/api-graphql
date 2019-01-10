export default `
  type Product {
    id: String!
    format: String!
    description: String!
    upc: String!
    pic: String!
  }
  type Query {
    product(description: String!): [Product]
    products: [Product]
  }
  type Mutation {
    addProduct(format: String!, description: String!, upc: String!, pic: String!, price: Float!, market: String!): Product
  }
`;
export default `
  type Product {
    id: Int!
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
    addProduct(id: Int!, format: String!, description: String!, upc: String!, pic: String!, price: Int!): Product
  }
`;
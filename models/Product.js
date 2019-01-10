import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the Product Schema.
const ProductSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  format: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }, 
  upc: {
    type: String,
    required: true
  }, 
  pic: {
    type: String,
    required: true
  }
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
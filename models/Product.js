import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

// Create the Product Schema.
const ProductSchema = new Schema({
  _id: Schema.Types.ObjectId,
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
  prices: [{ type: Schema.Types.ObjectId, ref: 'Prices' }],
  pic: {
    type: String,
    required: true
  }
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
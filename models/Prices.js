import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const Schema = mongoose.Schema;

// Create the Product Schema.
const PriceSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  idProduct: [{ type: String, ref: 'Products' }],
  price: {
    type: mongoose.Decimal128,
    required: true
  }, 
  idMarket: [{ type: String, ref: 'Markets' }]
});

const Prices = mongoose.model("Prices", PriceSchema);

export default Prices;
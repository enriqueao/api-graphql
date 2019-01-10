import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const Schema = mongoose.Schema;

// Create the Product Schema.
const PriceSchema = new Schema({
  id: {
    type: ObjectId,
    required: true,
  },
  idProduct: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }, 
  idMarket: {
    type: String,
    required: true
  }
});

const Prices = mongoose.model("Prices", PriceSchema);

export default Prices;
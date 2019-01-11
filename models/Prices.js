import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create the Product Schema.
const PriceSchema = new Schema({
  price: {
    type: String,
    required: true
  }, 
  market: { type: Schema.Types.ObjectId, ref: 'Markets' }
});

const Prices = mongoose.model("Prices", PriceSchema);

export default Prices;
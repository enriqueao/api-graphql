import mongoose from "mongoose";
const Schema = mongoose.Schema;
// Create the MarketSchema Schema.
const MarketSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  marketName: {
    type: String,
    required: true
  },
  marketLogo: {
    type: String,
    required: true
  }
});

const Markets = mongoose.model("Markets", MarketSchema);
export default Markets;
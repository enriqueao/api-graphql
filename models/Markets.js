import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

// Create the MarketSchema Schema.
const MarketSchema = new Schema({
  _id: Schema.Types.ObjectId,
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
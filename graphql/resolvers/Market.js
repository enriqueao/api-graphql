// The User schema.
import Market from "../../models/Markets";

export default {
    Query: {
        market: (root, { marketName }) => {
            return new Promise((resolve, reject) => {
                Product.findOne({ marketName }).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        markets: () => {
            return new Promise((resolve, reject) => {
                Market.find({})
                    .populate()
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        }
    },
    Mutation: {
        addMarket: (root, { marketName, marketLogo}) => {
            return new Promise((resolve, reject) => {
                const newMarket = new Market({
                    id: new mongoose.Types.ObjectId(),
                    marketName,
                    marketLogo,
                });
                newMarket.save((err, res)=>{
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};
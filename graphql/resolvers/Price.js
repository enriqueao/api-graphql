// The User schema.
import Price from "../../models/Prices";

export default {
    Query: {
        price: (root, { idProduct }) => {
            return new Promise((resolve, reject) => {
                Price.find({ idProduct })
                .populate("idProduct")
                .populate("idMarket")
                .exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};
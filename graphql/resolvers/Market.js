// The User schema.
import Product from "../../../models/Product";

export default {
    Query: {
        product: (root, args) => {
            return new Promise((resolve, reject) => {
                Product.find({
                    $or: [
                        { description: { $regex: `.*${args.name}.*` } },
                        { upc: { $regex: `.*${args.name}.*`} }
                    ]
                }).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        products: () => {
            return new Promise((resolve, reject) => {
                Product.find({})
                    .populate()
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        }
    }
};
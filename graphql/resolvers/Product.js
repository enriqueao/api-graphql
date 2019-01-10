// The User schema.
import Product from "../../../models/Product";

export default {
    Query: {
        product: (root, args) => {
            return new Promise((resolve, reject) => {
                Product.find({
                    $or: [
                        { description: { $regex: `.*${args.description}.*` } },
                        { upc: { $regex: `.*${args.description}.*`} }
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
    },
    Mutation: {
        addProduct: (root, { id, name, email }) => {
            const newUser = new User({ id, name, email });

            return new Promise((resolve, reject) => {
                newUser.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};
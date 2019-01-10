// The User schema.
import Product from "../../models/Product";
import Price from "../../models/Prices";
import Market from "../../models/Markets";

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
        addProduct: (root, { format, description, upc, pic, price, market}) => {
            const newProduct = new Product({ 
                id: new mongoose.Types.ObjectId(), 
                format, 
                description,
                upc,
                pic 
            });

            Market.findOne({ marketName: market }, 'id', function (err, mart) {
                err || !mart && reject(err);
                idMarket = mart.idMarket
            });

            return new Promise((resolve, reject) => {
                newProduct.save((err, res) => {
                    err && reject(err);
                    const newPrice = new Price({
                        id: new mongoose.Types.ObjectId(),
                        idProduct: newProduct.id,
                        price,
                        idMarket
                    });
                    newPrice.save(function (err, res) {
                        err ? reject(err) : resolve(res);
                    });
                });
            });
        }
    }
};
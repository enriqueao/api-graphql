// The User schema.
import Product from "../../models/Product";
import Price from "../../models/Prices";
import Market from "../../models/Markets";
import mongoose from "mongoose";

export default {
    Query: {
        product: (root, args) => {
            return new Promise((resolve, reject) => {
                Product.find({
                    $or: [
                        { description: { $regex: `.*${args.description}.*` } },
                        { upc: { $regex: `.*${args.description}.*` } }
                    ]
                }).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        products: () => {
            return new Promise((resolve, reject) => {
                Product.find({})
                    .populate("idProduct")
                    .populate("idMarket")
                    .exec((err, res) => {
                        console.log(res)
                        err ? reject(err) : resolve(res);
                    });
            });
        },
        price: (root, { idProduct }) => {
            return new Promise((resolve, reject) => {
                Price.find({ idProduct })
                    .populate("idProduct")
                    .populate("idMarket")
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        },
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
        addProduct: (root, { format, description, upc, pic, price, market }) => {
            return new Promise((resolve, reject) => {
                const newProduct = new Product({
                    id: (new mongoose.Types.ObjectId()).toString(),
                    format,
                    description,
                    upc,
                    pic
                });
                var idMarket = "Sin definir";
                Market.findOne({ marketName: market }, 'id', function (err, mart) {
                    err || !mart && reject(err);
                    console.log(mart);
                    idMarket = mart.id.toString()
                });
                newProduct.save((err, res) => {
                    err && reject(err);
                    const newPrice = new Price({
                        id: (new mongoose.Types.ObjectId()).toString(),
                        idProduct: (newProduct.id).toString(),
                        price,
                        idMarket
                    });
                    newPrice.save(function (err, res) {
                        err ? reject(err) : resolve(res);
                    });
                });
            });
        },
        addMarket: (root, { marketName, marketLogo }) => {
            return new Promise((resolve, reject) => {
                const newMarket = new Market({
                    id: (new mongoose.Types.ObjectId()).toString(),
                    marketName,
                    marketLogo,
                });
                newMarket.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};
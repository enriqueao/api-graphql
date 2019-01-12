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
                    })
                    .populate({
                        path: "prices", // 1st level subdoc (get prices)
                        populate: { // 2nd level subdoc (get market in prices)
                            path: "market",
                            select: 'marketName marketLogo'// space separated (selected fields only)
                        }
                    })
                    .exec((err, res) => {
                        console.log(res);
                        err ? reject(err) : resolve(res);
                    });
            });
        },
        products: () => {
            return new Promise((resolve, reject) => {
                Product.find({})
                    .populate({
                        path: "prices", // 1st level subdoc (get prices)
                        populate: { // 2nd level subdoc (get market in prices)
                            path: "market",
                            select: 'marketName marketLogo'// space separated (selected fields only)
                        }
                    })  
                    .exec((err, res) => {
                        console.log(res);
                        err ? reject(err) : resolve(res);
                    });
            });
        },
        price: (root, { idProduct }) => {
            return new Promise((resolve, reject) => {
                Price.find()
                    .populate("market")
                    .exec((err, res) => {
                        console.log(res);
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
                Market.findOne({ marketName: market }, '_id', function (err, mart) {
                    err && reject(err);
                    const newPrice = new Price({
                        price,
                        market: mart._id
                    });
                    newPrice.save((err, res) => {
                        err && reject(err);
                        const newProduct = new Product({
                            _id: new mongoose.Types.ObjectId(),
                            format,
                            description,
                            upc,
                            pic,
                            prices: newPrice._id
                        });
                        newProduct.save(function (err, res) {
                            err ? reject(err) : resolve(res);
                        });
                    });
                });
                
            });
        },
        addMarket: (root, { marketName, marketLogo }) => {
            return new Promise((resolve, reject) => {
                const newMarket = new Market({
                    _id: new mongoose.Types.ObjectId(),
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
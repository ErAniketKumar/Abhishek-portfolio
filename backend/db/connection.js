const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
const connectDB = async () => {
    const dbOption = {
        dbName:"AbhPortfolio",
    };
    await mongoose.connect(uri, dbOption);
    console.log("connected DB");
};

module.exports = connectDB;
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        const dbOption = {
            dbName: "AbhPortfolio",
            tls: true, // Enable TLS/SSL connection
            tlsAllowInvalidCertificates: true, // Allow self-signed certificates
        };

        await mongoose.connect(uri, dbOption);
        console.log("Connected to DB");
    } catch (error) {
        console.error("DB Connection Error:", error);
    }
};

module.exports = connectDB;

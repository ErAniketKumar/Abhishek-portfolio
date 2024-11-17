const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const connectDB = require("./db/connection");
const router = require("./routes/routes");

// CORS configuration
app.use(cors());

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(
    session({
        secret: process.env.EXP_SECRET || "abhisec", 
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI, // Your MongoDB connection string
            collectionName: 'sessions'
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // 1 day
        },
    })
);

// Connect to the database
connectDB(); 

// Routes
app.use("/api", router);

// Start the server
app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});
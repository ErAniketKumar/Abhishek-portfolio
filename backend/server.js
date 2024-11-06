const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const dotenv = require("dotenv");
dotenv.config();
const session = require("express-session");
const connectDB = require("./db/connection");
const router = require("./routes/routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
	session({
		secret: process.env.EXP_SECRET || "abhisec", 
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24,
		},
	})
);

connectDB(); 

app.use("/api", router);

app.listen(port, () => {
	console.log(`Server is running at port: ${port}`);
});

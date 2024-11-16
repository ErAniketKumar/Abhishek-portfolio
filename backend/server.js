const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

// app.use(
// 	cors({
// 	  origin: 'https://abhisheksarraf.in', // Allow requests from this origin
// 	  methods: 'GET, POST', // Specify allowed methods
// 	  credentials: true,    // Allow cookies and other credentials
// 	})
//   );

app.use(cors());

const session = require("express-session");
const connectDB = require("./db/connection");
const router = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/Images', express.static(path.join(__dirname, 'public/api/Images')));

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


app.options('/api/login', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', 'https://abhisheksarraf.in');
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.status(200).end();
  });
  

// for not found url / routes

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
	console.log(`Server is running at port: ${port}`);
});

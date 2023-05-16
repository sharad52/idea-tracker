// Load env variables
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

// Import dependencies
const express = require("express");
const connectToDb = require("./web_service/config/connectToDb");

// create an express app
const app = express();

// connect to db
connectToDb();

// Routing 
app.get('/', (req, res) => {
    res.json({hello: "world"});
})

// start our server
app.listen(process.env.PORT);
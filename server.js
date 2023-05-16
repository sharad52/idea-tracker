// Load env variables
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

// Import dependencies
const express = require("express");
const connectToDb = require("./web_service/config/connectToDb");
const userController = require("./web_service/controllers/userController");

// create an express app
const app = express();

// connect to db
connectToDb();

// Routing 
app.get('/', (req, res) => {
    res.json({hello: "world"});
})
app.get("/users", userController.fetchAllUser);

app.post("/user", userController.createUser);

app.put("/user/:id", userController.updateUser);

app.delete("user/:id", userController.deleteUser);

// start our server
app.listen(process.env.PORT);
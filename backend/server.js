
const app = require('./app')
const express = require("express");
const { connectToMongoDb } = require("./db");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoURI = process.env.MONGO_ATLAS_URL;

console.log(mongoURI);


const port = process.env.PORT;
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectToMongoDb(mongoURI).then(() =>
  console.log("Mongodb Connected")
);

app.use("/",(req,res) => {
    res.send("Welcome to the backend")
})

app.listen(port , () => {
    console.log(`Server running on port ${port} `)
})

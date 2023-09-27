
const app = require('./app')
const express = require("express");
const { connectToMongoDb } = require("./db");
const bodyParser = require("body-parser");


const port = 5000;
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectToMongoDb("mongodb://127.0.0.1:27017/gfg-cgc").then(() =>
  console.log("Mongodb Connected")
);


app.listen(port , () => {
    console.log(`Server running on port ${port} `)
})

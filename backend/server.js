
const app = require('./app')
const express = require("express");
const { connectToMongoDb } = require("./db");
const bodyParser = require("body-parser");
const mongoURI =
  "mongodb+srv://chiragvohra39470:JQwIK8cPLxLen6WW@mycluster.i9pxneu.mongodb.net/";



const port = 5000;
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectToMongoDb(mongoURI).then(() =>
  console.log("Mongodb Connected")
);


app.listen(port , () => {
    console.log(`Server running on port ${port} `)
})


const app = require('./app')
const express = require("express");
const { connectToMongoDb } = require("./db");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const mongoURI = process.env.MONGO_ATLAS_URL;

console.log(mongoURI);

app.use(cors({
  origin: ['https://backend-gfg.vercel.app/'],
  methods: ['GET', 'POST'],
  credentials: true
}));
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

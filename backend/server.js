const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/users');


const port = 8080;

const dbURL = "mongodb+srv://princedev:a9v5zSviAWYgrmIV@cluster0.avnmsp4.mongodb.net/FullStack";
const connectDB = async function(url) {
  try {
    const conn = await mongoose.connect(url);
    console.log(`MongoDB connection on host: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}

connectDB(dbURL);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => console.log(`http://localhost:${port}`));
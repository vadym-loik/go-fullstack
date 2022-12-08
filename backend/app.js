// mongoDB Atlas link: mongodb+srv://loikv:<password>@cluster0.6xrs19f.mongodb.net/?retryWrites=true&w=majority
// mongoDB PW: YozIC4ahbd1HnchC

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

const app = express();

mongoose
  .connect(
    'mongodb+srv://loikv:YozIC4ahbd1HnchC@cluster0.6xrs19f.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;

// mongoDB link: mongodb+srv://loikv:<password>@cluster0.6xrs19f.mongodb.net/?retryWrites=true&w=majority
// mongoDB PW: YozIC4ahbd1HnchC

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

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

app.post('/api/stuff', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Thing created successfully!',
  });
});

app.get('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'My first thing',
      description: 'All of the info about my first thing',
      imageUrl: '',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'My second thing',
      description: 'All of the info about my second thing',
      imageUrl: '',
      price: 3999,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(stuff);
});

module.exports = app;

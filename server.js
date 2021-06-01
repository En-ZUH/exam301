/* eslint-disable no-unused-vars */
'use strict';
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;
const DB = process.env.DATABASE_URL;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const getFromApi = require('./controller/getFromApi');
const Crud = require('./controller/Crud');


app.get('/', (req, res) => {
  res.send('the server is working');
});



app.get('/characters', getFromApi);

//CRUD routes
app.post('/favorite', Crud.creatFn);
app.get('/favorite', Crud.readFn);
app.put('/favorite/:slug', Crud.updateFn);
app.delete('/favorite/:slug', Crud.deleteFn);






app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`);
});

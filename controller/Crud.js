/* eslint-disable no-unused-vars */
'use strict';

const Db = require('../model/DB');

const creatFn = ((req, res) => {

  const { name, gender, img, psiPowers } = req.body;

  const slug = name.toLowerCase().split(' ').join('-');

  Db.find({ slug: slug }, (error, data) => {
    if (data.length > 0) {
      res.send('data is already exist');
    }
    else {
      const newStorage = new Db({
        name: name,
        slug: slug,
        gender: gender,
        img: img,
        psiPowers: psiPowers

      });
      newStorage.save();
      res.send('data has been added');

    }
  });
});


const readFn = ((req, res) => {
  Db.find({}, (error, data) => {
    res.send(data);
  });
});


const updateFn = ((req, res) => {

  const { name, gender } = req.body;
  const slug = req.params.slug;

  Db.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    }
    else {
      data[0].name = name;
      data[0].gender = gender;
    }
    data[0].save();
    Db.find({ slug: slug }, (error, data) => {
      res.send(data);
    });
  });
});


const deleteFn = ((req, res) => {
  const slug = req.params.slug;
  res.send('data has been deleted');

  Db.remove({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    }
    else {
      Db.find({}, (error, data) => {
        res.send(data);
      });
    }
  });
});
























module.exports = { creatFn, readFn, updateFn, deleteFn };


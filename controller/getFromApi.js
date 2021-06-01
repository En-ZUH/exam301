'use strict';
const superagent = require('superagent');


const getFromApi = ((req, res) => {
  superagent.get(`https://psychonauts-api.herokuapp.com/api/characters?limit=5`).then(data => {
    const responseApi = data.body.data.map(character => new Game(character));
    res.send(responseApi);
    console.log(responseApi);
  }).catch(console.log('error'));

});

class Game {
  constructor(data1) {
    this.name1 = data1.name;
    this.gender = data1.gender;
    this.img = data1.img;
    this.psiPowers = data1.psiPowers.name;

  }
}
module.exports = getFromApi;

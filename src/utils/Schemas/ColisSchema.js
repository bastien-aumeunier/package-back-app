const mongoose = require('mongoose')

var coliSchema = mongoose.Schema({
    name: String,
    track: String,
    transport: String,
    postal: String,
    etat: String, //en cours ou livré
    idUser: String,
  });
  
  const Colis = mongoose.model('Colis',coliSchema);

  module.exports = Colis
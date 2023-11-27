const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prdouctSchema = mongoose.Schema({
  name : {type : String},
  image : {type : String},
  text : {type : String},
  price : {type : Number},
  discount: {type : Number},
  quantityAvailable: {type : Number},
  category: {type : Number},
  currentPrice: {type : Number},
  sizes: {type : Array},
  colors: {type : Array},
  images: {type : Array},
  punctuation: {type : Object},
  reviews: {type : Array},
})


module.exports = mongoose.model('Product', prdouctSchema);
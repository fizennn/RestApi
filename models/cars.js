const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  maXe: String,
  name: String,
  price: Number,
  year: Number,
  brand: String,
},{
    timestamps: true
});

module.exports = mongoose.model('car',carSchema);



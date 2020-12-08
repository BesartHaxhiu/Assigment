const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String
  },
  price: { 
    type: Number
  },
  publish_date: {
      type: Date
  },
  stock: {
      type: Number
  }
});

module.exports = Product = mongoose.model("product", productSchema);
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
exports.getProducts = async (req, res) => {
	try {
		const product = await Product.find();
		res.header('All Products: ');
		res.json(product);
	} catch (err) {
		console.log({
			message: err,
		});
	}
};

// GET product by id
exports.getProductById = async (req,res) => {
    try{
      const id = req.params.productId;
          const product = await Product.findOne({ _id: id });
          console.log('Product: ' + product);
          res.json(product);
    }
     catch (error) {
    console.error(error);
    }
}

// POST Product
exports.postProduct =  async (req, res) => {
    try {
    
    let { title,price, publish_date, stock } = req.body;
    
    // Form Validation
  
    if ( !title || !price || !publish_date || !stock)
        return res.status(400).json({ msg: "Please fill all the field required" });
    if (price < 1)
        return res
            .status(400)
            .json({msg: "Price can't be lower than 1$"})
    if (title.length < 2)
        return res
          .status(400)
          .json({ msg: "Please write a valid title!" });
    if (stock < 1)
        return res
            .status(400)
            .json({msg: "Stock can't be lower than 1"})
  
    // If no error
    const newProduct = new Product({
        title,
        price,
        publish_date,
        stock
    });
    
    const submittedProduct = await newProduct.save();
    return res.json({
        message: 'Created product successfully',
        submittedProduct,
    });
    } 
    catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// UPDATE product by id
exports.updateProductById = async (req, res) => {
		const id = req.params.productId;
		if (req.body.products) {
		}
		const updated = await Product.findByIdAndUpdate(id, req.body);
		res.json({
            message: 'Updated product successfully',
            updated,
        });
};

// DELETE product by id
exports.deleteProductById = async (req, res) => {
		const id = req.params.productId;
		const deleteProduct = await Product.findByIdAndDelete(id);
		res.send({
            message: 'Product was deleted!',
            deleteProduct,
        })
}; 
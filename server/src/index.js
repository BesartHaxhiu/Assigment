const express = require('express');
const  path = require('path');
const cors = require('cors');
const  bodyParser = require('body-parser');
const  connectDB = require('./config/DB');
require('dotenv').config() 

// DB connection
connectDB()

//import routes
const { db } = require('./models/User');
const authRoutes = require('./routes/auth');
const product = require('./routes/product');

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(cors());
//routes middleware
app.use('/api/auth', authRoutes);
app.use('/api/products', product);

//PORT
var port = process.env.PORT || 5000;

app.listen(port, function(){
    console.log(`Listening to http:localhost:${port}`);
});


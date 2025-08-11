const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel'); // Import your Product model

const app = express();

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products); // Send products as JSON
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.get('/api/products/:id', async (req, res) => {
    try {
       
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

mongoose.connect('mongodb+srv://admin:WBVgGju8bIwVW6DC@backenddb.fc1lpxz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB')
    .then(() => {
        console.log('Connected to database');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.log('Connection failed', error);
    });

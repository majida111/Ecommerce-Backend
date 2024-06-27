const express=require('express');// Create an Express application
const app= express();
const path= require('path');
const bodyParser=require('body-parser');
const session=require('express-session');
const router=require('./routes/userRoutes.js'); 
// Define a port number for the server to listen on
const port = 3002; // You can change this to any available port


//Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for views (optional, defaults to 'views')
app.set('views', 'views');


const DB=require('./config/db');
const { default: mongoose } = require('mongoose');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Use the router
app.use('/', router);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});



// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

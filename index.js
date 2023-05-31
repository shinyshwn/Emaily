//import express 
const express = require('express'); 
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User')
require('./services/passport');


mongoose.connect(keys.mongoURI);

// create express application
const app = express(); 

//authRoutes is a funtion takes app object and attachs routes to it. 
require('./routes/authRoutes')(app); 

//Heroku assign port dynamically 
const PORT = process.env.PORT || 5000
// tell node to listen on port 5000
app.listen(PORT); 
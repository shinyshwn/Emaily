const mongoose = require('mongoose');
//const Schema = mongoose.Schema is euqal to the statement below
// assign mongoose Schema attribute to a Schema variable
const { Schema } = mongoose; 

const userSchema = new Schema({
    googleId: String
})

mongoose.model('users', userSchema); 

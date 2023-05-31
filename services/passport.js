// base module
const passport = require('passport');
// use google oauth
const GoogleStrategy = require('passport-google-oauth20').Strategy; 
const mongoose = require('mongoose');
//.. means go up a drictory 
const keys = require('../config/keys.js'); 

const User = mongoose.model('users'); 

// tell application you want to authenticate user with google
passport.use(new GoogleStrategy({
    clientID:keys.googleClientID, 
    clientSecret: keys.googleClientSecret, 
    // Where we want user to send to after users grant permission. 
    callbackURL: '/auth/google/callback'
    
}, 
//the second argument to the google strategy
//callback function: create a mongoose model 
(accessToken, refreshToken, profile, done)=>{
    //mongoDB query and return a promise 
    User.findOne({ googleId: profile.id })
        .then((existingUser) => {
            // existingUser is not null
            if(existingUser){
                //find the exisingUser record
                //null: no error
                done(null, existingUser); 

            }else{
                //call save to save to the database
                new User({googleId: profile.id}).save() .then(user => done(null, user)); // make sure before done it is saved
            }
        }); 
})
); 
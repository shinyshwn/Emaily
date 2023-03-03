//import express 
const express = require('express'); 
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; 
// create express application
const app = express(); 
const keys = require('./config/keys'); 

//Create a route handler that watch for incoming HTTP request with a specific method
//app: Express app to register this route handler with
//get: watch for incoming reuests with this method

//'/' if its trying to visit localhost:5000 or localhost:5000/ 

// req: incoming request
// res: response to be send back

app.get('/', (req, res) => {
    res.send({hi:'there'});
})
// passport.use(new GoogleStrategy({
//     clientID:keys.googleClientID, 
//     clientSecret: keys.googleClientSecret, 
//     callbackURL: '/auth/google/callback'
// }, (accessToken, refreshToken, profile, done)=>{
//     console.log('access token', accessToken); 
//     console.log('refresh token', refreshToken); 
//     console.log('profile', profile); 

// })
// ); 

// app.get('/auth/google', passport.authenticate('google', {
//     scope: ['profile', 'email']
// })); 

// app.get('/auth/google/callback', passport.authenticate('google'));

// const PORT = process.env.PORT || 5000; 

//Heroku assign port dynamically 
const PORT = process.env.PORT || 5000
// tell node to listen on port 5000
app.listen(PORT); 
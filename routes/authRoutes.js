//orginal passport npm module
const passport = require('passport')

module.exports =(app)=>{
    app.get('/auth/google', passport.authenticate('google', {
        //what we want from the google user
        //google has a list of scope we can ask for 
        scope: ['profile', 'email']
    })); 
    
    //when users are send back with a code, google strategy will see the code and give profile info instead get into oauth workflow 
    app.get('/auth/google/callback', passport.authenticate('google'));
    

}; 

//Create a route handler that watch for incoming HTTP request with a specific method
//app: Express app to register this route handler with
//get: watch for incoming reuests with this method
//'/' if its trying to visit localhost:5000 or localhost:5000/ 
// req: incoming request
// res: response to be send back

// app.get('/', (req, res) => {
//     res.send({cao:'nima'});
// })

//routehandler: whenever user get into that path, excute passport use the strategy called google
//the google strategy has an internal identifier called 'google'


require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const User = require('./models/user.model');
const {signInSaveByGoogle, saveOrUpdateUsers, checkIfUserExists} = require('./routes/functions');

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET, 
  }));
  

const port = process.env.PORT || 5000;

// Connect with  MongoDb Atlas
const DB_CONNECTION = require('./controller/database_connection');
const api_routes = require('./routes/api');
const weather_routes = require('./routes/weather');

const frontend = 'http://localhost:3000';
const corsOptions = {
    origin: frontend,
    optionsSuccessStatus: 200
}


// Middleware
app.use(
    cors(corsOptions),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/public' ,express.static(path.join(__dirname, 'public')));

// API Routes
app.use(api_routes);
app.use(weather_routes);


// Start Server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    DB_CONNECTION.on('connected', () => {
        console.log('MongoDB database connection established successfully');
    });
    DB_CONNECTION.on('error', (err) => {
        console.log(`MongoDB database connection error: ${err}`);
    });
});


// Google Auth2.0

app.get('/test/auth', (req, res) => {
  res.render('google_auth');
});

var passport = require('passport');
var userProfile;
 
app.use(passport.initialize());
app.use(passport.session());
 
// Google OAuth2.0 Success
app.get('/success', async (req, res, next) => {
  if(req.user){
    const userReady = await User.findOne({email: req.user.email});
    if(userReady){
      res.redirect("http://localhost:3000/dashboard");
    }else{
      // Create Json Web Token and save it to server
      // const token = jsonwebtoken.sign({user: req.user}, process.env.JWT_SECRET, {expiresIn: '5h'});
      // res.redirect(frontend);
      // const userProfile = await signInSaveByGoogle(req.user);

      // if(userProfile){
      //   req.session.user = userProfile;
      //   res.redirect(frontend);
      // }else{
      //   console.log('Error');
      //   res.redirect(frontend);
      // }
      // res.redirect('http://localhost:3001/admin/dashboard/?email=' + req.user.email);
      res.redirect("http://localhost:3000/dataform");
    }
  }else{
    res.redirect('/');
  }
});

// Error
app.get('/error', (req, res) => {
  res.send("error logging in");
});
 
app.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('http://localhost:3000/login');
})

passport.serializeUser(function(user, cb) {
  cb(null, user);
});
 
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


/*  Google AUTH  */
 
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const callBack = "http://localhost:5000/auth/google/callback";


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: callBack
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));
 
app.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect success.
    req.session.user = userProfile;
    res.redirect('/success');
  });
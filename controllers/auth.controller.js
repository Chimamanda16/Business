//Defining constants
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require("passport");
require("dotenv").config();

//Implementing passport.js logic
passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    // });
    return done(err, profile);

    }
));

passport.serializeUser((user, done) =>{
    done(null, user);
});

passport.deserializeUser((user, done) =>{
    done(null, user);
});
const passport = require('passport');
const MongoDB=require("../urtils/mongodb.util");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./auth.service');
require('dotenv').config();

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

passport.use(
  new GoogleStrategy({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: '/auth/google/callback'
  },
    function(accessToken, refreshToken, profile, done) {
      userProfile = profile;
      const user = new User(MongoDB.client);
      user.create(userProfile);
      console.log(userProfile.id);
      console.log(userProfile.displayName);
      console.log(userProfile.emails[0].value);
      return done(null);
    }
  )
);
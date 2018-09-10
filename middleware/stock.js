var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
    function (email, password, done) {
        db.User.findOne({
            email: email
        }).then(function (dbUser) {
            if (!dbUser) {
                console.log("Incorrect Email")
                return done(null, false, {
                    message: "Incorrect email."
                });
            }
            else if (!dbUser.validPassword(password)) {
                console.log("Incorrect Password")
                return done(null, false, {
                    message: "Incorrect password."
                });
            } else if(dbUser.validPassword(password)){
                console.log("Logged In", dbUser)
                return done(null, dbUser);
            }
        });
    }
));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

module.exports = passport;
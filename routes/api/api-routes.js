var db = require("../models");
var passport = require("../config/middleware/stock");

module.exports = function(app) {

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    return res.redirect("/");
  });

  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function(data){
      console.log(data)
      return res.redirect("/")
    })
      .catch(err => res.status(422).json(err));
  });
};
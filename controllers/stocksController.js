const db = require("../models");

// Defining methods for the booksController
module.exports = {
  createAccount: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addStock: function(req, res){

    db.User
      .findByIdAndUpdate(req.body._id.id,{$push: {stocks:req.body.stock}}, res.body)
      .then(dbModel =>res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  findById: function(req, res) {
    db.User
      .findById(req.user._id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  removeStock: function(req, res) {
    console.log(req.query._id);
    console.log(req.query.stock);
    // res.send("we made it")
    // console.log("GooooooodByyyyyyyye " + req.user.stock)
    db.User
    .findByIdAndUpdate(req.query._id,{$pull: {stocks:req.query.stock}}, res.body)
      // .findOneAndRemove({stock:req.query.stock})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
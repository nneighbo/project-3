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
    console.log(req.body.stock)
    db.User
      .findOneAndUpdate({_id: req.body._id.id}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
};
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
      .findOneAndUpdate({_id: res.data._id}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
};
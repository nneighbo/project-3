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
    console.log(req.body._id.id)
    db.User
      .findOneAndUpdate({_id: req.body._id.id},{$push: {stocks:req.body.stock}}, res.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
};
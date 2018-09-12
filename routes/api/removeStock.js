const router = require("express").Router();
const stocksController = require("../../controllers/stocksController");

router.route("/")
  .delete(stocksController.removeStock)
module.exports = router;
const router = require("express").Router();
const stocksController = require("../../controllers/stocksController");

router.route("/")
  .post(stocksController.addCoin)
module.exports = router;

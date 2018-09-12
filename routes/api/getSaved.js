const router = require("express").Router();
const stocksController = require("../../controllers/stocksController");

router.route("/")
  .get(stocksController.findById)
module.exports = router;
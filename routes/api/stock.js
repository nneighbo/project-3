const router = require("express").Router();

const stocksController = require("../../controllers/stocksController");

router.route("/")
//   .get(booksController.findAll)
  .post(stocksController.createAccount);

// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;

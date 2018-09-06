const router = require("express").Router();
const stockRoutes = require("./stock");

router.use("/stocks", stockRoutes);

module.exports = router;

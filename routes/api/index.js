const router = require("express").Router();
const stockRoutes = require("./stock");
const loginRoute = require("./login")

router.use("/stocks", stockRoutes);
router.use("/login", loginRoute);
module.exports = router;

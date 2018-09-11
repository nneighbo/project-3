const router = require("express").Router();
const stockRoutes = require("./stock");
const loginRoute = require("./login")
const getuserRoute = require("./getuser")
const logoutRoute = require("./logout")

router.use("/stocks", stockRoutes);
router.use("/login", loginRoute);
router.use("/getuser", getuserRoute)
router.use("/logout", logoutRoute)

module.exports = router;

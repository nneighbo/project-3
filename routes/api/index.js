const router = require("express").Router();
const stockRoutes = require("./stock");
const loginRoute = require("./login")
const getuserRoute = require("./getuser")
const logoutRoute = require("./logout")
const addStock = require("./addStock")
const getSaved = require("./getSaved")

router.use("/stocks", stockRoutes);
router.use("/login", loginRoute);
router.use("/getuser", getuserRoute)
router.use("/logout", logoutRoute)
router.use("/addstock", addStock)
router.use("/getsaved", getSaved)

module.exports = router;

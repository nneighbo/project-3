const router = require("express").Router();
const stockRoutes = require("./stock");
const loginRoute = require("./login")
const getuserRoute = require("./getuser")
const logoutRoute = require("./logout")
const addStock = require("./addStock")
const getSaved = require("./getSaved")
const removeStock = require("./removeStock")
const addcoin = require("./addCoin")

router.use("/stocks", stockRoutes);
router.use("/login", loginRoute);
router.use("/getuser", getuserRoute)
router.use("/logout", logoutRoute)
router.use("/addstock", addStock)
router.use("/getsaved", getSaved)
router.use("/removestock", removeStock)
router.use("/addcoin", addcoin)

module.exports = router;

const router = require("express").Router();
const passport = require("../../middleware/stock");
const isAuthenticated = require("../../middleware/isAuthenticated")

router.route("/")
  .get(isAuthenticated, (req, res)=>{
      res.json(req.user);
  })

module.exports = router;
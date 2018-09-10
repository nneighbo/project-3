const router = require("express").Router();
var passport = require("../../middleware/stock");

router.route("/")
  .post(passport.authenticate("local"), (req, res)=>{
      res.json(req.user);
  })

module.exports = router;
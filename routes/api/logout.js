const router = require("express").Router();

router.route("/")
  .get((req, res)=>{
      req.logout();
      res.redirect("/")
  })

module.exports = router;

// app.get('/logout', function(req, res){
//     req.logout();
//     res.redirect('/');
//   });
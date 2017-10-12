var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var watson = require("../models/watsonModel.js");

// TEST ROUTE FOR WATSON
router.get("/watsontest", function(req, res) {

  var watsonFuncs = require("../public/assets/js/watson.js");
  //console.log("router.get(/watsontest, watsonFuncs", watsonFuncs);
  watsonFuncs.test1();
  watsonFuncs.test2();
  
  res.send("Returning from watsonTest");
});

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  watson.all(function(data) {
    var hbsObject = {
      watson: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// TODO make this endpoint work!
router.post("/api/watson", function(req, res) {
  watson.create([
    "name"
  ], [
     req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect("/?id=" + result.insertId );
  });
});

// TODO make this endpoint work!
router.post("/api/watson/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  watson.update({
    listened: req.body.listened
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      res.redirect('/#404')
    } else {
      res.redirect('/');
    }
  });
});

router.post("/api/watson/delete/:id", function(req, res) {
  
  watson.delete(req.params.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      res.redirect('/#404')
    } else {
      res.redirect('/');
    }
  });
});

// Export routes for server.js to use.
module.exports = router;

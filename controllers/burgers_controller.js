var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all((data) => {
    let hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(
    ["name", "devoured"],
    [req.body.name, req.body.devoured],
    (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});


// Export routes for server.js to use.
module.exports = router;

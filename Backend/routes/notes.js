const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("notes api");
});

module.exports = router;

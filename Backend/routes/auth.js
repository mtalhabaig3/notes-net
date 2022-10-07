const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let obj = {
    text: "Salam",
    number: 3,
  };
  res.json(obj);
});

module.exports = router;

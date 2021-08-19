const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("me");
});

router.get("/resume", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  res.render("mail", { mail: req.body.email });
});

module.exports = router;

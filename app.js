const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const unscrambler = require("unscrambler");
const cors = require("cors");
const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/unscramble", async (req, res) => {
  const word = req.body?.word || req.query?.word;
  const unscrambledWord = unscrambler(word);
  res.send(unscrambledWord);
});

app.use("/", (req, res) => res.sendStatus(204));

module.exports = app;

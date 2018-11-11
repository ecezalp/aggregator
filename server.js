const path = require("path");
const express = require("express");
const del = require('del');
require('dotenv').config();

const DIST_DIR = path.join(__dirname, "dist"),
  PORT = 3000,
  app = express();

del(['dist/*.js', '!dist/bundle.js']);

app.use(express.static(DIST_DIR));

app.get("*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

const server = app.listen(PORT,
  () => {
    console.log("\n","\x1b[35m",`ECE'S`,"\x1b[34m",`REACT`,"\x1b[36m",`REDUX`,"\x1b[32m",`STORYBOOK`,"\x1b[35m",`BOILERPLATE listening at http://localhost:${server.address().port}`,"\n");
  }
);
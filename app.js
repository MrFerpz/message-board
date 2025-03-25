require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/indexRouter')

// for parsing the post submits
app.use(express.urlencoded({ extended: true }));

console.log("Listening on port 3000");

// set views path
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set assets path (css)
const assetsPath = path.join(__dirname, "assets");
app.use(express.static(assetsPath));

// Routes
app.use("/", indexRouter);

// Port to listen on
app.listen(3000)
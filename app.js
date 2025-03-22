const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/indexRouter')
const newMessageRouter = require('./routes/newMessageRouter');

console.log("Listening on port 3000");

// set views path
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use("/", indexRouter);
app.use("/new", newMessageRouter);

// Port to listen on
app.listen(3000)
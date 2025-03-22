const { Router } = require('express');
const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => res.send("Here's where we'll find a new message form"));

module.exports = newMessageRouter;
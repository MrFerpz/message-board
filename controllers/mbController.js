const db = require('../db/queries');

async function indexGet(req, res) {
    const data = await db.getUserTable();
    console.log(data);
    res.render("index", { messages: data });
}

function newFormGet(req, res) {
    res.render("form");
}

async function newFormPost(req, res) {
    const username = req.body.username;
    const message = req.body.message;
    await db.addUser(username, message);
    res.redirect("/");
}

function deleteUserPageGet(req, res) {
    res.render("deleteform");
}

async function deleteUserPost(req, res) {
    const username = req.body.username;
    await db.deleteUser(username);
    console.log(username + " and their message was deleted");
    res.redirect("/")
}

module.exports = {
    indexGet,
    newFormGet,
    newFormPost,
    deleteUserPageGet,
    deleteUserPost
}
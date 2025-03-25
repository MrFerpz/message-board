const { Router } = require('express');
const mbController = require('../controllers/mbController')
const indexRouter = Router();

indexRouter.get("/", mbController.indexGet);
indexRouter.get("/new", mbController.newFormGet);
indexRouter.post("/new", mbController.newFormPost);
indexRouter.get("/delete", mbController.deleteUserPageGet);
indexRouter.post("/delete", mbController.deleteUserPost);

module.exports = indexRouter;
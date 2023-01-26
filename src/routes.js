const express = require('express');
const route = express();

// Importar controller
const controller = require('./controller');
// Create route
route.get("/index", controller.index);
route.get("/list", controller.list);
route.get("/create", controller.create);
route.get("/update", controller.update);
route.get("/get/:id", controller.get);
route.get("/delete/:id", controller.delete);
// Exportar route
module.exports = route;

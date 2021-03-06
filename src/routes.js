const express = require("express");
const routes = express.Router();
const multer = require("./app/middlewares/multer");
const ProductController = require("./app/controllers/ProductController");
const HomeController = require("./app/controllers/HomeController");

routes.get("/", HomeController.index);
routes.get("/products/create", ProductController.create);
routes.get("/products/:id", ProductController.show);
routes.get("/products/:id/edit", ProductController.edit);

routes.post("/products", multer.array("photos", 6), ProductController.post);
routes.put("/products", multer.array("photos", 6), ProductController.put);

routes.delete("/products", ProductController.delete);

// Alias
routes.get("/ads/create", function (req, res) {
  return res.render("products/create");
});
module.exports = routes;

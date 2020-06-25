const express = require("express");
const routes = express.Router();
const server = express();
const productController = require("./app/controlers/productController");

routes.get("/", function (req, res) {
  return res.render("layout");
});

routes.get('/products/create', productController.create )
routes.get('/products/:id/edit',productController.edit )
routes.post('/products',productController.post )
routes.put('/products',productController.put )
routes.delete('/products',productController.delete )


routes.get('/ads/create', function(req, res){
  return res.redirect("/products/create")
})

module.exports = routes;

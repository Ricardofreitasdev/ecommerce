const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const methodOverride = require("method-override")
var bodyParser = require('body-parser')


const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(express.static("public"));
server.use(methodOverride("_method"))
server.use(routes);
server.use(express.urlencoded({extended: true}));


server.set("view engine", "njk");

nunjucks.configure("src/app/views", {
  express: server,
  autoescape: false,
  noCache: true,
})


server.listen(5000, function () {
  console.log("server is running");
});

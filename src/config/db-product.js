const { Sequelize, sequelize } = require("./db");

const Products = sequelize.define("products", {
  category_id: {
    type: Sequelize.INTEGER,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.TEXT,
  },
  description: {
    type: Sequelize.TEXT,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
  status: {
    type: Sequelize.INTEGER,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = Products;

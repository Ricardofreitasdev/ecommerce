const {Sequelize, sequelize} = require("./db")


const Category = sequelize.define("categories", {
  name: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = Category


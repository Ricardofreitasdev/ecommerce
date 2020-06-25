const Category = require("../../config/db-category");
const Products = require("../../config/db-product");

module.exports = {
  create(req, res) {
    Category.findAll()
      .then((data) => {
        return res.render("products/create.njk", { categories: data });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  async post(req, res) {
    const price = req.body.price.replace(/\D/g, "");

    const resultPost = await Products.create({
      category_id: req.body.category_id,
      user_id: 1,
      name: req.body.name,
      description: req.body.description,
      price: price,
      quantity: req.body.quantity,
      status: req.body.status,
    });

    const resultCat = await Category.findAll();
    const categories = resultCat;
    return res.render("products/create.njk", { categories });
  },

  async edit(req, res) {
    let findId = req.params.id;

    const produtoFiltrado = await Products.findAll({
      where: {
        id: findId,
      },
    });

    const categoriaFiltrada = await Category.findAll();
    return res.render("products/edit.njk", {
      product: produtoFiltrado[0],
      categories: categoriaFiltrada,
    });
  },

  async put(req, res) {
    req.body.price = req.body.price.replace(/\D/g, "");
    const putId = req.body.id;

    Products.update({
        category_id: req.body.category_id,
        user_id: 1,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        status: req.body.status,
      },
      {
        where: {
          id: putId,
        },
      }
    );
    return res.redirect("/");
  },

  async delete(req, res){
   Products.destroy({
     where: {
       id: req.body.id
     }
   })
   return res.redirect("/");
  }
};

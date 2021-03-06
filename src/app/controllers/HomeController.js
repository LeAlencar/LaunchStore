const Product = require("../models/Product");
const File = require("../models/File");
const { formatPrice } = require("../../lib/utils");

module.exports = {
  async index(req, res) {
    let results = await Product.all();
    const products = results.rows;
    if (!products) return res.send("Product not found");

    async function getImage(productId) {
      let results = await Product.files(productId);
      const files = results.rows.map(
        (file) =>
          `${req.protocol}://${req.headers.host}${file.path.replace(
            "public",
            ""
          )}`
      );

      return files[0];
    }

    const productsPromises = products
      .map(async (product) => {
        product.img = await getImage(product.id);
        product.price = formatPrice(product.price);
        product.oldPrice = formatPrice(product.old_price);
        return product;
      })
      .filter((product, index) => (index > 2 ? false : true));

    const lastAdded = await Promise.all(productsPromises);
    console.log(lastAdded);
    return res.render("home/index", { products: lastAdded });
  },
};

module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/product-categories/count",
      handler: "product-category.count",
    },
    {
      method: "GET",
      path: "/product-categories/categ/:category",
      handler: "product-category.findByProducCategoryName",
    },
  ],
};

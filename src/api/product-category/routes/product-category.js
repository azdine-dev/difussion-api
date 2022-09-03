module.exports = {
  routes: [
    {
      method: "GET",
      path: "/product-categories",
      handler: "product-category.find",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/product-categories/:id",
      handler: "product-category.findOne",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/product-categories",
      handler: "product-category.create",
      config: {
        policies: [],
      },
    },
    {
      method: "PUT",
      path: "/product-categories/:id",
      handler: "product-category.update",
      config: {
        policies: [],
      },
    },
    {
      method: "DELETE",
      path: "/product-categories/:id",
      handler: "product-category.delete",
      config: {
        policies: [],
      },
    },
  ],
};

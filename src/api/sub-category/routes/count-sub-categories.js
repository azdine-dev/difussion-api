module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/sub-categories/count",
      handler: "sub-category.count",
    },
  ],
};

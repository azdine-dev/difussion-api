"use strict";

/**
 * product router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/shop",
      handler: "product.findShopProducts",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/elements/products",
      handler: "product.findElementsProducts",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/search",
      handler: "product.findSearchedProducts",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/demo/:demo",
      handler: "product.findDemoProducts",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/products/count",
      handler: "product.count",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/products/:slug",
      handler: "product.findBySlug",
      config: {
        policies: [],
      },
    },
  ],
};

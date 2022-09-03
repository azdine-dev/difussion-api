"use strict";

/**
 * product-category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::product-category.product-category",
  {
    count(ctx) {
      var { query } = ctx.request;
      return strapi
        .query("api::product-category.product-category")
        .count({ where: query });
    },
  }
);

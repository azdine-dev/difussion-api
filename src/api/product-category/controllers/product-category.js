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

    async findByProducCategoryName(ctx) {
      let categories;
      const { category } = ctx.params;
      categories = await strapi.db
        .query("api::product-category.product-category")
        .findOne({
          populate: true,
          where: {
            name: {
              $eq: category,
            },
          },
        });
      return {
        categories: categories,
      };
    },
  }
);

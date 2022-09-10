"use strict";

/**
 * sub-category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::sub-category.sub-category", {
  count(ctx) {
    var { query } = ctx.request;
    return strapi
      .query("api::sub-category.sub-category")
      .count({ where: query });
  },
});

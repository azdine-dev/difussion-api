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

    async findByProducCategorySlug(ctx) {
      let categories;
      const { category } = ctx.params;
      categories = await strapi.db
        .query("api::product-category.product-category")
        .findOne({
          populate: true,
          where: {
            slug: {
              $eq: category,
            },
          },
        });
      return {
        categories: categories,
      };
    },
    async getAllParentCategories(ctx) {
      let categories;

      categories = await strapi.db
        .query("api::product-category.product-category")
        .findMany({
          populate: true,
          where: {
            up_category: {
              id: {
                $null: true,
              },
            },
          },
        });
      return {
        categories: categories,
      };
    },

    // async findByProducCategorySlug(ctx){
    //      let brands;
    //      const { category } = ctx.params;

    //     brands = await strapi.db
    //     .query("api::product-category.product-category")
    //     .findOne({
    //       populate: true,
    //       where: {
    //         $and:[
    //           slug: {
    //             $eq: category,
    //           },
    //         ]

    //       },
    //     });
    // }
  }
);

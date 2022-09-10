"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  beforeCreate: async (model) => {
    if (model.name) {
      model.update({
        slug: slugify(model.name.toLowerCase()),
      });
    }
  },
  beforeUpdate: async (model) => {
    if (model.name) {
      model.update({
        slug: slugify(model.name.toLowerCase()),
      });
    }
  },
};

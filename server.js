const strapi = require("@strapi/strapi");
strapi({ dir: process.cwd(), autoReload: true }).start();

const crypto = require("crypto");
module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: crypto.randomBytes(16).toString("base64"),
      jwt: {
        expiresIn: "7d",
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});

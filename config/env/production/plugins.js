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
      providerOPtions: {
        sizeLimit: 250 * 1024 * 1024,
        localServer: {
          maxage: 300000,
        },
      },
    },
  },
});

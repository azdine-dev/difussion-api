module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
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

require("dotenv/config");

module.exports = {
  service: {
    endpoint: {
      url: process.env.BASE_URL,
      skipSSLValidation: true,
    },
  },
};

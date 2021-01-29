const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  authToken: process.env.AUTH_TOKEN,
};
const {tailwindTransform} = require('postcss-lit');

module.exports = {
  content: {
    files: ['./src/**/*.ts'],
    transform: {
      ts: tailwindTransform
    }
  }
};
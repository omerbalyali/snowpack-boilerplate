const autoprefixer = require('autoprefixer');
const postCssImport = require('postcss-import');
const postCssNested = require('postcss-nested');

module.exports = {
  plugins: [postCssImport, postCssNested, autoprefixer],
};

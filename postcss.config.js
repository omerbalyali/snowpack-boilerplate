const path = require('path');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssNested = require('postcss-nested');
const postcssSimpleVars = require('postcss-simple-vars');

module.exports = {
  plugins: [
    postcssImport(),
    postcssMixins({
      silent: true,
      mixinsDir: path.resolve(__dirname, './src/styles/mixins'),
    }),
    postcssNested,
    postcssSimpleVars({
      silent: true,
    }),
    autoprefixer,
  ],
};

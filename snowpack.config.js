/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  plugins: [
    // '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-babel',
    '@snowpack/plugin-typescript',
  ],
  installOptions: {
    sourcemap: true,
    // treeshake: true
  },
  devOptions: {
    sourcemap: true,
    fallback: 'public/index.html',
  },
  buildOptions: {
    /* ... */
  },
  mount: {
    src: '/dist',
    'public/favicons': { url: '/', static: true, resolve: false },
    public: { url: '/', static: false, resolve: false },
  },
  alias: {
    '@src': './src',
  },
  experiments: {
    optimize: {
      bundle: true,
      minify: true,
      manifest: true,
      target: 'es2018',
    },
  },
};

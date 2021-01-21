/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-babel',
    '@snowpack/plugin-typescript',
  ],
  packageOptions: {
    sourcemap: true,
  },
  devOptions: {
    sourcemap: true,
  },
  buildOptions: {
    /* ... */
  },
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  mount: {
    src: '/dist',
    'public/favicons': { url: '/', static: true, resolve: false },
    public: { url: '/', static: false, resolve: false },
  },
  alias: {
    '@src': './src',
  },
  optimize: {
    bundle: true,
    minify: true,
    manifest: true,
    // treeshake: true,
    // splitting: true,
    target: 'es2017',
  },
};

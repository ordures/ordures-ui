import { defineConfig } from 'dumi';
import navs from './navs';
import alias from './alias';
import lessLoader from './lessLoader';
import extraBabelPlugins from './babelPlugins';

export default defineConfig({
  title: 'ordures-ui',
  mode: 'site',
  devtool: 'eval',
  hash: true,
  favicon: '/images/logo.jpeg',
  logo: '/images/logo.jpeg',
  fastRefresh: {},
  externals: {
    React: 'window,React',
    ReactDOM: 'window.ReactDOM'
  },
  headScripts: [
    'https://unpkg.com/react@16.7.0/umd/react.production.min.js',
    'https://unpkg.com/react-dom@16.7.0/umd/react-dom.production.min.js'
  ],
  nodeModulesTransform: {
    type: 'none'
  },

  navs,
  alias,
  lessLoader,
  extraBabelPlugins
});

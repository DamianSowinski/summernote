const config = require('./common/production.common.config');
module.exports = {
  entry: {
    'summernote-lite': './src/js/settings',
    'summernote-lite.min': './src/js/settings',
    ...config.entries,
  },
  mode: 'production',
  optimization: config.optimization,
  output: config.output,
  externals: config.externals,
  devtool: config.devtool,
  module: config.module,
  plugins: config.plugins,
};

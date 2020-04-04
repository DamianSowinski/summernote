const config = require('./common/production.common.config');
module.exports = {
  entry: {
    'summernote': './src/js/settings',
    'summernote.min': './src/js/settings',
    ...config.entries,
  },
  optimization: config.optimization,
  output: config.output,
  externals: config.externals,
  devtool: config.devtool,
  module: config.module,
  plugins: config.plugins,
};

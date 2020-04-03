const config = require('./common/dev.common.config');
module.exports = {
  entry: {
    'summernote': './src/js/lite/settings',
    'app': './src/js/app',
    ...config.entries,
  },
  output: config.output,
  externals: config.externals,
  devServer: config.devServer,
  module: config.module,
  plugins: config.plugins,
  devtool: 'source-map',
};

const config = require('./common/dev.common.config');
module.exports = {
  entry: {
    'summernote-lite': './src/js/settings',
    ...config.entries,
  },
  mode: 'development',
  output: config.output,
  externals: config.externals,
  devServer: config.devServer,
  module: config.module,
  plugins: config.plugins,
  devtool: 'source-map',
};

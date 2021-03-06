const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const scssConfig = require('./scss.config');
const path = require('path');
const fs = require('fs');
const pkg = require('../../package.json');

const productList = [
  'summernote-lite',
];

let entries = {};
fs.readdirSync(path.resolve(__dirname, '../../lang')).forEach(file => {
  const filename = file.replace('.js', '');
  entries[filename] = `./lang/${filename}`;
});

module.exports = {
  entries,
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: (chunkData) => {
      var isProduct = productList.includes(chunkData.chunk.name);
      return isProduct ? '[name].js' : 'lang/[name].js';
    },
  },
  externals: {
    jquery: 'jQuery', // dev includes jQuery by <script> tag
  },
  devServer: {
    port: 3000,
    contentBase: ['./dist'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'string-replace-loader',
            options: {
              search: '@@VERSION@@',
              replace: pkg.version,
            },
          },
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,
            },
          },
        ],
      },
      scssConfig,
      {
        test: /\.svg$/,
        use: [
          'svg-inline-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                // {removeTitle: true},
                // {removeXMLNS: false},
                // {cleanupListOfValues: true},
                {sortAttrs: true},
                {convertPathData: {floatPrecision: 0}},
                // {removeDimensions: true},
                {removeAttrs: {attrs: '(clip-rule|stroke-linejoin|stroke-miterlimit)'}},
              ],

            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'font',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'examples',
          to: 'examples',
        },
        {
          from: 'plugin',
          to: 'plugin',
        },
      ],
    }),
    new HtmlWebPackPlugin({
      inject: true,
      chunks: ['summernote-lite'],
      template: `./src/summernote-lite.html`,
      filename: 'index.html',
    }),
  ],
};

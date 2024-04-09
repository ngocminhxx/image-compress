const webpack = require("webpack");
const WebpackNotifierPlugin = require("webpack-notifier");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: `./_js/main.js`,
  output: {
    path: `${__dirname}/_public/js`,
    filename: "main.js",
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
  // externals: {
  //   jquery: "jQuery",
  // },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new WebpackNotifierPlugin({
      alwaysNotify: true,
    }),
    new StyleLintPlugin({
      files: "scss/**/*.scss",
      configFile: "config/.stylelintrc",
    }),
  ],
  module: {
    rules: [
      // For *.js
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true,
          configFile: ".eslintrc.yml",
        },
      },
    ],
  },
};

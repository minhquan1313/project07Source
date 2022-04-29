const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  // mode: "development",
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
  },
  plugins: [new CleanWebpackPlugin()],
});

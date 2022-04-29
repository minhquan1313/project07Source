const path = require("path");
const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  // mode: "development",
  mode: "production",
  output: {
    filename: "final.[contenthash].js",
  },
});

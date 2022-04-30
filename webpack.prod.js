const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  // mode: "development",
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
  },
  plugins: [new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }), new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: function () {
                  return [require("autoprefixer")];
                },
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
});

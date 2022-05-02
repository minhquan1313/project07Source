const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  //   devtool: "none",
  entry: {
    main: "./src/index.js",
    // css: "./src/css.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/[hash][ext]",
        },
      },
    ],
  },
};

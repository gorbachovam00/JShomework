const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
 
  entry: ["@babel/polyfill", "./index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 300,
  },
};

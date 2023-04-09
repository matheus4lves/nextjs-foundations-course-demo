const HtmlWebpackPlugin = require("html-webpack-plugin");

exports.loadHtml = () => ({
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
});

exports.page = ({ title, template } = {}) => ({
  plugins: [new HtmlWebpackPlugin({ title, template })],
});

exports.devServer = () => ({
  devServer: {
    host: "local-ip",
    hot: true,
    open: true,
    port: 3000,
  },
});

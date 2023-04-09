const path = require("path");
const parts = require("./webpack.parts.js");
const { merge } = require("webpack-merge");

// Common config
const commonConfig = merge([
  {
    context: path.resolve(__dirname, "./src"),
    entry: ["./index.html"],
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "./dist"),
    },
  },
  /* Remember that webpack only understands js out of the box. So, if you want
  to work with an .html file, you'll have to config the html-loader first, and then
  use the HtmlWepbackPlugin (since you want it to add script tags and etc for you) */
  parts.loadHtml(),
  parts.page({ title: "Next.js Demo", template: "./index.html" }),
]);

const configs = {
  development: merge([parts.devServer()]),
  production: {},
};

// https://webpack.js.org/configuration/configuration-types/#exporting-a-function
module.exports = (_, argv) => {
  const mode = argv.mode;
  return merge(commonConfig, configs[mode], { mode });
};

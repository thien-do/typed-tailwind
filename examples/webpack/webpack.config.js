const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const tsRules = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "ts-loader",
      options: {}
    },
    {
      loader: "typed-tailwind-loader",
      options: { config: path.resolve("./src/tw.ts") }
    }
  ]
};

const cssRules = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: { hmr: process.env.NODE_ENV === "development" }
    },
    {
      loader: "css-loader",
      options: { importLoaders: 1 }
    },
    {
      loader: "postcss-loader",
      options: { plugins: [require("tailwindcss")] }
    }
  ]
};

const cssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css",
  ignoreOrder: false
});

module.exports = {
  // mode: "development",
  mode: "production",
  entry: "./src/index.ts",
  output: { filename: "main.js", path: path.resolve(__dirname, "dist") },
  module: { rules: [tsRules, cssRules] },
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  plugins: [cssExtractPlugin]
};

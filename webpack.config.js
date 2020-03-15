const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pkg = require("./package.json");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: pkg.name,
    libraryTarget: "commonjs2"
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|build)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.*css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
};

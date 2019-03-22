const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const SimpleProgressPlugin = require("webpack-simple-progress-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    // filename: "bundle.js",
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              query: {
                minimize: true,
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                minimize: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                minimize: true
              }
            }
          ]
        })
      },
      {
        test: /\.(jpeg|bmp|png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new SimpleProgressPlugin(),
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Webpack 4 Development With hot module replacement",
      template: "src/index.html"
    }),
    new webpack.NamedModulesPlugin(),
    new BundleAnalyzerPlugin(),
    new CopyWebpackPlugin([{ from: "src/assets", to: "assets" }]),
    new ExtractTextPlugin({
      filename: "style.css",
      allChunks: true
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};

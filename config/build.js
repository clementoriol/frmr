const webpack = require("webpack");
const join = require("path").join;
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

const libSrcPath = join(__dirname, "/../src");
const distPath = join(__dirname, "/../dist");
const publicPath = join(__dirname, "/../public");

module.exports = opts => {
  return {
    entry: {
      index: "./src/index",
    },
    output: {
      path: join(__dirname, "/../dist"),
      libraryTarget: "umd",
      library: "Frmr",
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [libSrcPath],
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
      ],
    },
    resolve: {
      modules: ["node_modules", libSrcPath],
      extensions: [".js"],
    },
    plugins: (plugins => {
      if (opts.analyze) {
        plugins.push(new BundleAnalyzerPlugin());
      }

      plugins.push(
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify("production"),
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false,
        }),
        new webpack.optimize.UglifyJsPlugin({
          beautify: false,
          mangle: {
            screw_ie8: true,
            keep_fnames: true,
          },
          compress: {
            screw_ie8: true,
          },
        }),
        new LodashModuleReplacementPlugin()
      );

      return plugins;
    })([]),
  };
};

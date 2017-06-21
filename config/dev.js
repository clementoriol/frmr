const join = require("path").join;

const libSrcPath = join(__dirname, "/../src");
const distPath = join(__dirname, "/../dist");
const publicPath = join(__dirname, "/../public");

module.exports = opts => {
  return {
    entry: {
      index: "./src/index",
      demo: "./src/demo",
    },
    output: {
      path: join(__dirname, "/../dist"),
      libraryTarget: "umd",
      library: "Frmr",
      filename: "[name].js",
    },
    devtool: "source-map",
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
    devServer: {
      contentBase: [distPath, publicPath],
      port: 3000,
    },
  };
};

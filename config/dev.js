const join = require("path").join;

const libSrcPath = join(__dirname, "/../src");
const distPath = join(__dirname, "/../dist");
const publicPath = join(__dirname, "/../public");

module.exports = opts => {
  return {
    entry: {
      frmr: "./src/index",
      demo: "./src/demo",
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

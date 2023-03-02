//import webpack from 'webpack';

const path = require("path");
const nodeExternals = require("webpack-node-externals");
const fs = require("fs");

module.exports = {
  entry: "./src/application/server.ts",
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sqlite3|db)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "data",
            },
          },
        ],
      },
    ],
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    // ... other plugins
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap("AfterEmitPlugin", (compilation) => {
          // create a directory called "assets" in your dist folder
          const assetsDir = path.join(compilation.options.output.path, "api/data");
          fs.mkdirSync(assetsDir);
        });
      },
    },
  ],
  output: {
    filename: "api/app/api.js",
    path: path.resolve(__dirname, "dist"),
  },
};

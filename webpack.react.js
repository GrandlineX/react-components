/* eslint-disable @typescript-eslint/no-var-requires,import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const env = process.env.BUILD;

module.exports = {
  //  mode: 'development',
  mode: 'production',
  entry: './src/renderer.tsx',
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'dist/renderer.js'),
    compress: true,
    port: 9002, // Don't use port 9000 it's used for the electron env
    host: '0.0.0.0',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'renderer.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      meta: {
        REACT_APP_VERSION: process.env.npm_package_version,
      },
    }),
  ],
};

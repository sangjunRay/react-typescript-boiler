const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const dotenv = require('dotenv');

const mode = process.env.NODE_ENV || 'development';

module.exports = () => {
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
  });
  return {
    mode,
    entry: {
      app: path.join(__dirname, 'src', 'index.tsx'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      fallback: {
        fs: false,
        path: false,
        os: false,
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        templateParameters: {
          env: process.env.NODE_ENV === 'production' ? '운영' : process.env.NODE_EN === 'staging' ? 'staging' : '개발',
        },
        minify:
          process.env.NODE_ENV === 'production'
            ? {
                collapseWhitespace: true,
                removeComments: true,
              }
            : false,
      }),
      new DotEnv({
        path: `./.env.${process.env.NODE_ENV}`,
        safe: true,
      }),
      new CleanWebpackPlugin(),
    ],
  };
};

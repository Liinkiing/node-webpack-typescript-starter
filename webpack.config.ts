import path from 'path';
import webpack from 'webpack';
import {TsconfigPathsPlugin} from 'tsconfig-paths-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

type NodeEnv = "development" | "production" | "none"

const config: webpack.Configuration = {
  entry: './src/index.ts',
  mode: (process.env.NODE_ENV || 'production') as NodeEnv,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: true
    })
  ]
};

export default config;

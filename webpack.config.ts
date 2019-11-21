import path from 'path';
import webpack from 'webpack';

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
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.js'],
  }
};

export default config;

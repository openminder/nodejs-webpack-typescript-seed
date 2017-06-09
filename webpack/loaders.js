module.exports = [
  {
    test: /\.tsx?$/,
    loader: 'ts-loader'
  },
  {
    test: /\.json$/,
    loader: 'json-loader'
  },
  {
    test: /test.js$/,
    use: 'mocha-loader',
    exclude: /node_modules/,
  }
];

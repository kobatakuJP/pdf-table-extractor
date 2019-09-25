const path = require('path')

module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: {
    index: './index.ts',
    'pdf-table-extractor': './pdf-table-extractor.ts'
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader', options: { inline: true, fallback: false } }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
  }
}

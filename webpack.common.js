const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'import-glob-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '#': path.resolve(__dirname, './src/components/'),
    },
    extensions: ['.vue', '.sass', '.js', '.html'],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
}

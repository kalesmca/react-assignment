const webpack = require('webpack');
module.exports = {
    mode: "development",
    output: {
      publicPath: "http://localhost:2000/",
    },
    devServer: {
      port: 2000,
      historyApiFallback: true,
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
          'process.env.name': JSON.stringify('ArjunRam'),
        }),
      ],
}
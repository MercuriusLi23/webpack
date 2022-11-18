const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'RanRan',
            template: 'src/assets/index.html'
        })
    ],
};

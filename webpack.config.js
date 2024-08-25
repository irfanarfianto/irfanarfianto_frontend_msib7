const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
               test: /\.(png|jpe?g|gif)$/i,
               use: [
                  {
                    loader: 'file-loader',
                        options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/',
                     },
                  },
               ],
               },
            {
               test: /\.css$/i,
               use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        static: './dist',
        port: 9000,
    },
    mode: 'development',
};

const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")

const config = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['react'],
                    },
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}

module.exports = config
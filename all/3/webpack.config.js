const path = require ('path')
const HtmlPlugin = require ('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve (__dirname, 'src', 'index.jsx')
    },
    output: {
        path: path.resolve (__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
                
            },
        ]
    },
    plugins: [
        new HtmlPlugin ({
            template: path.resolve (__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ]
}
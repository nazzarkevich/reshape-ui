const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode:      'development',
    devtool:   'inline-source-map',
    devServer: {
        contentBase: './public'
    },
    entry:     {
        app: './src/index.js'
    },
    output:    {
        path:       path.resolve(__dirname, './dist'),
        filename:   'bundle.js'
        // publicPath: '/'
    },
    // need for webpack to resolve right pathways
    resolve:   {
        extensions: ['.js', '.json', '.jsx', '.es6']
    },
    module:    {
        rules: [
            {
                test:    /\.js$|\.es6$|\.jsx$/,
                exclude: /node_modules/,
                loader:  'babel-loader'
            },
            {
                test: /\.css$|\.scss$/,
                use:  ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:   /\.svg$/,
                loader: 'svg-sprite-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};

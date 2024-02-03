const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true,
        port: 8564,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/i,
                use: ['file-loader']  
            },
        ]
    }
}
const path = require('path')

module.exports = {
    entry: './app.ts',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: `babel-loader`,
                },
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, `public`),
        open: true,
        port: 19001,
    }
}

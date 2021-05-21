const path = require('path')

module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    devServer: {
        contentBase: path.join(__dirname, `public`),
        open: true,
        port: 19001,
    }
}

process.env.NODE_ENV = 'development';
process.on('unhandledRejection', err => {
    throw err;
});

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./config/webpack.config')(process.env.NODE_ENV);

const PORT = parseInt(process.env.PORT, 10) || 3002;
const HOST = process.env.HOST || '0.0.0.0';

const compiler = Webpack(webpackConfig);

const devServerOptions = Object.assign({}, webpackConfig.devServer, {
    open: false
});

const devServer = new WebpackDevServer(compiler, devServerOptions);

console.log(devServerOptions)

devServer.listen(PORT, HOST, err => {
    if (err) {
        return console.log(err);
    }
});
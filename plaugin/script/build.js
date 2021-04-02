process.env.NODE_ENV = 'production';
process.on('unhandledRejection', err => {
    throw err;
});

const Webpack = require('webpack');
const webpackConfig = require('./config/webpack.config')(process.env.NODE_ENV);

const compiler = Webpack(webpackConfig);

compiler.run((err) => {
    if (err) {
        console.log(err);
    }
});
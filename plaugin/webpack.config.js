const path = require('path');
process.env.NODE_ENV = 'development';

//防止打包多次
// const getExternals = function(appPackagePath) {
//     const package = require(appPackagePath);
//     const dependencies = Object.keys(package.dependencies)
//     return dependencies.reduce((externals, dep) => ({
//         ...externals,
//         [dep]: `commonjs2 ${dep}`
//     }), {
//         osui: 'commonjs2 antd'
//     });
// }
module.exports = function(webpackEnv) {
    const isEnvDevelopment = true;
    const isEnvProduction = false;
//console.log(path.resolve(__dirname, './package/index.js'))
    return {
        mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
        bail: isEnvProduction,
        devtool: isEnvProduction ? 'source-map' : 'cheap-module-source-map',
        entry: './package/index.js',
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, './build'),
            libraryTarget: 'commonjs',
            publicPath: '/'
        },
        externals: {
            react: 'commonjs2 react',
            //osui: 'commonjs2 osui'
        },
        // watch: true,
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    include: path.resolve(__dirname,'./package/index.js'),
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [
                            [
                                require.resolve('babel-preset-react-app')
                            ],
                        ],
                        sourceMaps: true,
                        inputSourceMap: true
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        require.resolve('style-loader'),
                        require.resolve('css-loader'),
                        // TODO:: scope css
                        require.resolve('postcss-loader')
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        require.resolve('style-loader'),
                        require.resolve('css-loader'),
                        // TODO:: scope css
                        require.resolve('postcss-loader'),
                        require.resolve('less-loader'),
                    ]
                }
            ]
        },

        // TODO: plugins
        plugins: [],
        devServer: {
            // hot: true,
            writeToDisk: true,
            publicPath: '/',
            // contentBase: '',
            clientLogLevel: 'none',
            watchOptions: {},
            public: '387c4e79d071.ngrok.io',
        }
    }
}
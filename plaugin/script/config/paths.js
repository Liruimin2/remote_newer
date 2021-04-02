const path = require('path');
const resolve = filePath => path.resolve(__dirname, '../../', filePath);


console.log(resolve('build'))

module.exports = {
    // TODO: 默认配置
    pluginIndexJs: resolve('packages'),
    buildPath: resolve('packages/build'),
    pluginPackagePath: resolve('packages'),
    appPackageJSONPath: resolve('../package.json')
}
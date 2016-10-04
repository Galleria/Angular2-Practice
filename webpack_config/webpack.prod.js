const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const DefinePlugin = require('webpack/lib/DefinePlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'PROD';
const METADATA = webpackMerge(commonConfig.metadata,{
     ENV: ENV
});

module.exports = webpackMerge(commonConfig,{
    metadata:METADATA,
    plugins:[
        new DefinePlugin({
            'ENV': JSON.stringify(METADATA.ENV),
            'process.env': {
                'ENV': JSON.stringify(METADATA.ENV),
                'NODE_ENV': JSON.stringify(METADATA.ENV),
                'VERSION': JSON.stringify(METADATA.VERSION)
            }
        })
    ]
})

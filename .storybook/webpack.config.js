const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.stories\.(jsx|tsx|ts)?$/,
                loader: require.resolve('@storybook/source-loader'),
                include: [path.resolve(__dirname, '../components')],
                enforce: 'pre',
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false,
                            config: {
                                path: path.resolve(__dirname, '../.storybook/'),
                            },
                        },
                    }
                ],
            },
            {
                test: /\.vue$/,
                use: ['vue-loader'],
                include: path.resolve(__dirname, '../src/'),
            }
        ],
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        },
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
    },
    performance: {
        hints: false,
    },
    devtool: '#eval-source-map',
};




const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: './dist',
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(scss)$/,
                use: [{
                    loader: 'style-loader', // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: {
                        list: [
                            // All default supported tags and attributes
                            "...",
                            {
                                tag: "img",
                                attribute: "data-src",
                                type: "src",
                            },
                            {
                                tag: "img",
                                attribute: "data-srcset",
                                type: "srcset",
                            },
                            {
                                // Tag name
                                tag: "link",
                                // Attribute name
                                attribute: "href",
                                // Type of processing, can be `src` or `scrset`
                                type: "src",
                                // Allow to filter some attributes
                                filter: (tag, attribute, attributes, resourcePath) => {
                                    // The `tag` argument contains a name of the HTML tag.
                                    // The `attribute` argument contains a name of the HTML attribute.
                                    // The `attributes` argument contains all attributes of the tag.
                                    // The `resourcePath` argument contains a path to the loaded HTML file.

                                    if (/my-html\.html$/.test(resourcePath)) {
                                        return false;
                                    }

                                    if (!/stylesheet/i.test(attributes.rel)) {
                                        return false;
                                    }

                                    if (
                                        attributes.type &&
                                        attributes.type.trim().toLowerCase() !== "text/css"
                                    ) {
                                        return false;
                                    }

                                    return true;
                                },
                            },
                        ],
                    },
                }
            },
            {
                test: /\.(mp4|png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                }, { loader: 'url-loader' }]

            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
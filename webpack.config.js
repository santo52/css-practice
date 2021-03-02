const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

module.exports = {
    entry: {
        one: './css/one/styles.scss',
        two: './css/two/styles.scss',
        three: './css/three/styles.scss',
        four: './css/four/styles.scss',
        five: './css/five/styles.scss',
    },
    output: {
        path: path.resolve(__dirname, "css"),
        filename: '[name]/app.js',
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: "[name]/styles.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
				test: /\.(jpg|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
                        esModule: false,
                        context: 'project',
					}
				}
			}
        ]
    },
    devServer: {
        hot: true,
    },
}
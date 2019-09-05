// https://thoughtbot.com/blog/setting-up-webpack-for-react-and-hot-module-replacement
module.exports = {
	context: __dirname + "/app",
	entry: "./app.js",

	output: {
		filename: "app.js",
		path: __dirname + "/dist",
    },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
};

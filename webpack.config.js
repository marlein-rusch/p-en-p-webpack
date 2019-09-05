module.exports = {
	context: __dirname + "/app",
	entry: "./app.js",

	output: {
		filename: "app.js",
		path: __dirname + "/dist",
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"],
            }
        ]
    }
};

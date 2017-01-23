import path from 'path';
import webpack from 'webpack';

export default {
	devtools: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',

		path.join(__dirname, '/client/index.js'),
	],
	output: {
		path: '/',
		publicPath: '/'
	},
	plugins: [
		//makes cleaner error messages
		new webpack.NoErrorsPlugin(),
		//ensures consistant hashes
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: [
					path.join(__dirname, 'client'),
					path.join(__dirname, 'server/shared')
				],
				loaders: [ 'react-hot', 'babel']
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			}
		]
	},
	resolve: {
		extensions: [ '', '.js']
	}
}
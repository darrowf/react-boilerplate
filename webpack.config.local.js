const path = require( 'path' )
const webpack = require( 'webpack' )

const GLOBALS = {
	'process.env'		: {
		NODE_ENV	: JSON.stringify( 'local' )
	}
}


module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
		'./src/index'
	],
	target: 'web',
	output: {
		path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './src'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin( GLOBALS ),
		new webpack.NoEmitOnErrorsPlugin()
	],
	module: {
		rules: [
			{ test: /\.js$/, include: path.join( __dirname, 'src' ), loaders: [ 'babel-loader' ] },
			{ test: /(\.css)$/, loaders: [ 'style-loader', 'css-loader' ] },
			{ test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
			{ test: /\.(woff|woff2)/, loader: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff' },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
		]
	}
}

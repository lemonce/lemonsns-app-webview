'use strict';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: [
			'framework7/dist/css/framework7.min.css',
			'framework7-icons/css/framework7-icons.css',
			'material-design-icons/iconfont/material-icons.css',
			path.resolve(__dirname, '../src/main.js')
		]
	},
	output: {
		path: path.resolve(__dirname, '../static'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.runtime.min.js',
			'framework7$': 'framework7/dist/js/framework7.min.js',
			'framework7-vue$': 'framework7-vue/dist/framework7-vue.min.js',
			'template7$': 'template7/dist/template7.min.js',
			'dom7$': 'dom7/dist/dom7.min.js',
			'markdown-it$': 'markdown-it/dist/markdown-it.min.js',
			'@': path.resolve(__dirname, '../src')
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(['css-loader'])
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'less-loader'])
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
			},
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	],
	node: false
};

'use strict';

const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = module.exports = merge(baseWebpackConfig, {
	devtool: 'inline-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': '"development"'
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html'),
			inject: true
		}),
		// new CopyWebpackPlugin([{
		// 	from: path.resolve(__dirname, '../static'),
		// 	to: config.dev.assetsSubDirectory,
		// 	ignore: ['.*']
		// }])
	]
});

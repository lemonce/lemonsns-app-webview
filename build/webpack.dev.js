'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(baseWebpackConfig, {
	devtool: 'inline-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': '"development"'
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html'),
			inject: true
		})
	]
});

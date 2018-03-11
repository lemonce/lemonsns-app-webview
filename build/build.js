'use strict';

// require('');

process.env.NODE_ENV = 'production';

const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.prod');
const fs = require('fs');
const fixStaticPath = require('./fix-static-path');


'user strict';

const config = require('../../config.json');

import axios from 'axios';

const instance = axios.create({
	baseURL: config.baseURL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
});

export default instance;
'user strict';

import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://120.27.113.195:8000/api/ufwd/',
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
});

export default instance;
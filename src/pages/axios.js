'user strict';


import axios from 'axios';
import config from '../../config.json';

const instance = axios.create({
	baseURL: `${config.baseURL}/api/ufwd`,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
});

export default instance;
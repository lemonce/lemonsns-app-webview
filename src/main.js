'use strict';

import Vue from 'vue';
import Framework7 from 'framework7';
import Framework7Vue from 'framework7-vue';

Vue.use(Framework7Vue, Framework7);

import './css/app.less';

import Routes from './routes.js';
import store from './store/index.js';

import App from './app.vue';

const $app = new Vue(Object.assign({
	framework7: {
		id: 'app-webview',
		name: 'app-webview',
		theme: 'auto',
		material: true,
		routes: Routes
	},
	store
}, App));

// window.addEventListener('load', () => {
	
// 	axios.get('/app/noop', {
// 		timeout: 10000
// 	}).then(res => {
// 		const accountId = res.data.data.account;

// 		$app.$store.commit('updateAccount', accountId);
		
// 	}).then(() => {

// 		$app.$mount('#app');
// 	});

// });

$app.$mount('#app');
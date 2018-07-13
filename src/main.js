'use strict';

import Vue from 'vue';

import Framework7 from 'framework7';
import Framework7Vue from 'framework7-vue';

Vue.use(Framework7Vue, Framework7);

import './css/app.less';

import Routes from './routes.js';
import store from './store/index.js';

import App from './app.vue';

var isAndroid = Framework7.prototype.device.android === true;

const $app = new Vue(Object.assign({
	framework7: {
		id: 'app-webview',
		name: 'app-webview',
		theme: 'md',
		material: isAndroid,
		routes: Routes,
		toast: {
			closeTimeout: 2000,
			closeButton: true,
		}
	},
	store
}, App));

$app.$mount('#app');

document.addEventListener('deviceready', () => {
	const readyExitToast = $app.$f7.toast.create({
		text: '再按返回键退出应用',
		closeButton: false,
		closeTimeout: 2000
	});

	function onBackButton(event) {
		event.preventDefault();

		const router = $app.$f7.router;
		const history = $app.$f7.view.current.history;
	
		if (history.length > 1) {
			return router.back();
		}
	
		document.removeEventListener('backbutton', onBackButton, false);
		readyExitToast.open();
	
		setTimeout(() => {
			document.addEventListener('backbutton', onBackButton, false);
		}, 2000);
	}
	
	document.addEventListener('backbutton', onBackButton, false);
}, false);

function getlocalStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}

const loginStatus = getlocalStorage('loginStatus');

if (!loginStatus) {
	store.commit('updateAccount', null);
} else {

	store.commit('updateAccount', loginStatus.accountId);
}

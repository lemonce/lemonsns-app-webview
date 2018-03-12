'use strict';

import Vue from 'vue';
import Framework7 from 'framework7';
import Framework7Vue from 'framework7-vue';

Vue.use(Framework7Vue, Framework7);

import './css/icons.css';
import './css/app.less';

import Routes from './routes.js';

import App from './app.vue';

const $app = new Vue(Object.assign({
	framework7: {
		id: 'app-webview',
		name: 'app-webview',
		theme: 'auto',
		routes: Routes
	}
}, App));

$app.$mount('#app');
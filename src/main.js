import Vue from 'vue';
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';
import Framework7Styles from 'framework7/dist/css/framework7.css';

// import IconsStyles from './css/icons.css';
// import AppStyles from './css/app.css';

import Routes from './routes.js';

import App from './app';

Vue.use(Framework7, Framework7Vue);

new Vue({
	el: '#app',
	template: '<app/>',
	framework7: {
		id: 'app-webview',
		name: 'app-webview',
		theme: 'auto',
		routes: Routes
	},
	components: {
		app: App
	}
});
'use strict';
import Account from './pages/account/index.vue';
import Login from './pages/account/login.vue';

import Index from './pages/index.vue';

import Home from './pages/home/home.vue';

import Message from './pages/message/message.vue';

import Find from './pages/find/find.vue';

import Personal from './pages/personal/personal.vue';

export default [
	{
		path: '/',
		component: Account
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/index',
		component: Index,
		// tabs: [
		// 	{
		// 		path: '/home',
		// 		id: 'home'
		// 	},
		// 	{
		// 		path: '/message',
		// 		id: 'message'
		// 	},
		// 	{
		// 		path: '/find',
		// 		id: 'find'
		// 	},
		// 	{
		// 		path: '/personal',
		// 		id: 'personal'
		// 	}
		// ]
		// tabs: [
		// 	{
		// 		path: '/',
		// 		id: 'home',
		// 	},
		// 	{
		// 		path: '/message',
		// 		id: 'message',
		// 	},
		// 	{
		// 		path: '/find',
		// 		id: 'find',
		// 	},
		// 	{
		// 		path: '/personal',
		// 		id: 'personal',
		// 	}
		// ]
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/message',
		component: Message
	},
	{
		path: '/find',
		component: Find
	},
	{
		path: '/personal',
		component: Personal
	}
]
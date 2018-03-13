'use strict';
import Login from './pages/account/login.vue';

import Home from './pages/home/home.vue';

import Message from './pages/message/message.vue';

import Find from './pages/find/find.vue';

import Personal from './pages/personal/personal.vue';

export default [
	{
		path: '/',
		component: Login
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
'use strict';
import Account from './pages/account/account.vue';
import Register from './pages/account/register.vue';
import Binding from './pages/account/binding.vue';
import Info from './pages/account/info.vue';

import Index from './pages/index.vue';

import MessageContent from './pages/message/content.vue';

import PersonalInfo from './pages/personal/personal-info.vue';
import Card from './pages/personal/card.vue';
import Collection from './pages/personal/collection.vue';

import Follow from './pages/personal/follow/follow.vue';

import Track from './pages/personal/track.vue';

import Activity from './pages/personal/activity/activity.vue';
import ActivityDetail from './pages/personal/activity/activity-detail.vue';

import Advice from './pages/personal/advice/advice.vue';
import AdviceDetail from './pages/personal/advice/advice-detail.vue';

import Feedback from './pages/personal/feedback.vue';

import Setting from './pages/personal/setting/setting.vue';
import MessageRemind from './pages/personal/setting/message-remind.vue';
import ModifyPassword from './pages/personal/setting/modify-password.vue';
import About from './pages/personal/setting/about.vue';
import Introduction from './pages/personal/setting/introduction.vue';

export default [
	{
		path: '/',
		component: Account
	},
	{
		path: '/register',
		component: Register
	},
	{
		path: '/binding',
		component: Binding
	},
	{
		path: '/info',
		component: Info
	},
	{
		path: '/index',
		component: Index
	},

	{
		path: '/message-content',
		component: MessageContent
	},

	{
		path: '/personal-info',
		component: PersonalInfo
	},
	{
		path: '/card',
		component: Card
	},
	{
		path: '/collection',
		component: Collection
	},
	{
		path: '/follow',
		component: Follow
	},
	{
		path: '/track',
		component: Track
	},
	{
		path: '/activity',
		component: Activity
	},
	{
		path: '/activity-detail',
		component: ActivityDetail
	},

	{
		path: '/advice',
		component: Advice
	},
	{
		path: '/advice-detail',
		component: AdviceDetail
	},

	{
		path: '/feedback',
		component: Feedback
	},

	{
		path: '/setting',
		component: Setting
	},
	{
		path: '/message-remind',
		component: MessageRemind
	},
	{
		path: '/modify-password',
		component: ModifyPassword
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/introduction',
		component: Introduction
	},
]
'use strict';
import Login from './pages/account/login.vue';
import Register from './pages/account/register.vue';
import Binding from './pages/account/binding.vue';
import Info from './pages/account/info.vue';

import Index from './pages/index.vue';
import Home from './pages/home/home.vue';
import Message from './pages/message/message.vue';
import Find from './pages/find/find.vue';
import Personal from './pages/personal/personal.vue';
import Article from './pages/global/article.vue';
import Channel from './pages/global/channel.vue';

import MessageContent from './pages/message/content.vue';

import Circle from './pages/find/circle.vue';
import See from './pages/find/see.vue';

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

import VoteIndex from './pages/vote/vote-index.vue';
import Vote from './pages/vote/vote.vue';
import Questionnaire from './pages/vote/questionnaire.vue';

import Center from './pages/home/center.vue';
import CardList from './pages/home/card-list.vue';
import Knowledge from './pages/home/knowledge.vue';
import MailBox from './pages/home/mailbox.vue';
import ArticleList from './pages/home/article-list.vue';

export default [
	{
		path: '/login',
		component: Login
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
		path: '/index/',
		component: Index,
		name: 'home',
		tabs: [
			{
				path: '/',
				id: 'home',
				component: Home
			},
			{
				path: '/message/',
				id: 'message',
				component: Message
			},
			{
				path: '/find/',
				id: 'find',
				component: Find
			},
			{
				path: '/personal/',
				id: 'personal',
				component: Personal
			}
		]
	},
	{
		path: '/article/:id',
		component: Article
	},
	{
		path: '/channel/:id',
		component: Channel
	},

	{
		path: '/message-content',
		component: MessageContent
	},

	{
		path: '/circle',
		component: Circle
	},
	{
		path: '/see',
		component: See
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
		path: '/advice-detail/:id',
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

	{
		path: '/vote-index',
		component: VoteIndex
	},
	{
		path: '/vote',
		component: Vote
	},
	{
		path: '/questionnaire',
		component: Questionnaire
	},

	{
		path: '/center/:name',
		component: CardList
	},
	// {
	// 	path: '/center/:name',
	// 	component: Center
	// },
	{
		path: '/knowledge',
		component: Knowledge
	},
	{
		path: '/mailbox',
		component: MailBox
	},
	{
		path: '/article-list/:id',
		component: ArticleList
	}
];
<template>

<!-- <f7-pages> -->
	<f7-page toolbar-fixed navbar-fixed name="index" id="index">
		<f7-navbar>
			<f7-nav-left>
				<f7-link href="./message/"
					tab-link
					@tab:show="tabActived('message')">
					<f7-icon if-ios="f7:bell" if-md="material:notifications_none"></f7-icon>
				</f7-link>
			</f7-nav-left>
			<f7-nav-title>{{navTitle}}</f7-nav-title>
			<f7-nav-right>
				<f7-link href="/">
					<f7-icon material="crop_free"></f7-icon>
				</f7-link>
			</f7-nav-right>
		</f7-navbar>
		
		<f7-toolbar tabbar labels bottom-md> 
			<f7-link active
				text="首页"
				tab-link
				tab-link-active
				data-route-tab-id="home"
				href="./"
				icon-f7="home"
			></f7-link>
			<f7-link
				text="消息"
				tab-link
				data-route-tab-id="message"
				href="./message/"
				icon-f7="email"
			></f7-link>
			<f7-link
				text="发现"
				tab-link
				data-route-tab-id="find"
				href="./find/"
				icon-f7="compass"
			></f7-link>
			<f7-link
				text="我"
				tab-link
				data-route-tab-id="personal"
				href="./personal/"
				icon-f7="person"
			></f7-link>
		</f7-toolbar>

		<f7-tabs routable>
			<f7-tab id="home" tab-active
				@tab:show="tabActived('home')">
				<!-- <home></home> -->
			</f7-tab>
			<f7-tab id="message"
				@tab:show="tabActived('message')">
				<!-- <message></message> -->
			</f7-tab>
			<f7-tab id="find"
				@tab:show="tabActived('find')">
				<!-- <find></find> -->
			</f7-tab>
			<f7-tab id="personal"
				@tab:show="tabActived('personal')">
				<!-- <personal></personal>	 -->
			</f7-tab>
		</f7-tabs>
	</f7-page>
<!-- </f7-pages> -->

</template>

<script>
// import Home from './home/home.vue';
// import Message from './message/message.vue';
// import Find from './find/find.vue';
// import Personal from './personal/personal.vue';

export default {
	name: 'index',
	// components: {
	// 	Home,
	// 	Message,
	// 	Find,
	// 	Personal
	// },
	data() {
		return {
			activedTab: 'home',
			tabList: {
				'home': '青新微互连',
				'message': '消息',
				'find': '发现',
				'personal': '我'
			}
		}
	},
	computed: {
		navTitle() {
			return this.tabList[this.activedTab];
		},
	},
	methods: {
		tabActived(tab) {
			this.activedTab = tab;
		}
	}
}
</script>

<style lang="less">
// #app .view .navbar .title {
// 	left: 0!important;
// }
</style>

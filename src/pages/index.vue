<template>

<!-- <f7-pages> -->
	<f7-page toolbar-fixed navbar-fixed>
		<f7-navbar>
			<f7-nav-left>
				<f7-link href="/message">
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

		<f7-view url="/home"></f7-view>

		<f7-toolbar tabbar labels> 
			<f7-link active
				href="/home"
				text="Home"
				tab-link="#home"
				icon-f7="home"></f7-link>
			<f7-link
				href="/message"
				text="Messages"
				tab-link="#message"
				icon-f7="email"></f7-link>
			<f7-link
				href="/find"
				text="Find"
				tab-link="#find"
				icon-f7="compass"></f7-link>
			<f7-link
				href="/personal"
				text="Personal"
				tab-link="#personal"
				icon-f7="person"></f7-link>
		</f7-toolbar>

		<f7-tabs>
			<f7-tab id="home" tab-active
				@tab:show="tabActived('home')">
				<!-- <home-view></home-view> -->
			</f7-tab>
			<f7-tab id="message"
				@tab:show="tabActived('message')">
				<!-- <message-view></message-view> -->
			</f7-tab>
			<f7-tab id="find"
				@tab:show="tabActived('find')">
				<!-- <find-view></find-view> -->
			</f7-tab>
			<f7-tab id="personal"
				@tab:show="tabActived('personal')">
				<!-- <personal-view></personal-view>	 -->
			</f7-tab>
		</f7-tabs>
	</f7-page>
<!-- </f7-pages> -->

</template>

<script>
// import HomeView from './home/home.vue';
// import MessageView from './message/message.vue';
// import FindView from './find/find.vue';
// import PersonalView from './personal/personal.vue';

export default {
	name: 'index',
	// components: {
	// 	HomeView,
	// 	MessageView,
	// 	FindView,
	// 	PersonalView
	// },
	data() {
		return {
			activedTab: 'home',
		}
	},
	computed: {
		navTitle() {
			if (this.activedTab === 'home') {
				return 'My App';
			}
			if (this.activedTab === 'message') {
				return 'Messages';
			}
			if (this.activedTab === 'find') {
				return 'Find';
			}
			if (this.activedTab === 'personal') {
				return 'Personal';
			}
		},
	},
	methods: {
		tabActived(tab) {
			this.activedTab = tab;
			console.log(this.navTitle);
		}
	}
}
</script>

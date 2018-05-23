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
				<f7-link href="/login">
					<f7-icon material="crop_free"></f7-icon>
				</f7-link>
			</f7-nav-right>
		</f7-navbar>
		
		<f7-toolbar tabbar labels bottom-md> 
			<f7-link active
				text="首页"
				tab-link
				tab-link-active
				href="./"
				icon-material="home"
			></f7-link>
			<f7-link
				text="消息"
				tab-link
				href="./message/"
				icon-material="email"
			></f7-link>
			<f7-link
				text="发现"
				tab-link
				href="./find/"
				icon-material="search"
			></f7-link>
			<f7-link
				text="我"
				tab-link
				href="./personal/"
				icon-material="person"
			></f7-link>
		</f7-toolbar>

		<f7-tabs routable>
			<f7-tab id="home" tab-active
				@tab:show="tabActived('home')">
			</f7-tab>
			<f7-tab id="message"
				@tab:show="tabActived('message')">
			</f7-tab>
			<f7-tab id="find"
				@tab:show="tabActived('find')">
			</f7-tab>
			<f7-tab id="personal"
				@tab:show="tabActived('personal')">
			</f7-tab>
		</f7-tabs>
	</f7-page>
<!-- </f7-pages> -->

</template>

<script>

export default {
	name: 'index',
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
			
			$$('a.tab-link-active').removeClass('tab-link-active');
			this.$refs[tab].$el.className = 'tab-link tab-link-active';
		}
	}
}
</script>

<style lang="less">
// #app .view .navbar .title {
// 	left: 0!important;
// }
</style>

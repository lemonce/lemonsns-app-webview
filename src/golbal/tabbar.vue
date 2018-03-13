<template>
<f7-toolbar tabbar labels class="toolbar-bottom-md">
	<f7-link tab-link=""
		text="Home"
		href="/home"
		class="tab-link-active"
		icon-f7="home_fill"></f7-link>
	<f7-link text="Messages" href="/message" tab-link="" icon-f7="email"></f7-link>
	<f7-link text="Find" href="/find" tab-link="" icon-f7="compass"></f7-link>
	<f7-link text="Personal" href="/personal" tab-link="" icon-f7="person"
		login-screen-open="#login-screen"></f7-link>
</f7-toolbar>
</template>

<script>
export default {
	name: 'common-tabbar',
	data() {
		return {
			isTabActived: false,
			tabActived: {
				'tab-link-active': this.isTabActived,
				'icon-fill': this.isTabActived
			}
		}
	},
	methods: {
		activeTab() {
			this.isTabActived = true;
		}
	}
}
</script>

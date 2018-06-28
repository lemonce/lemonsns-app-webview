<template>
	<f7-page name="activity">
		<f7-navbar title="我的活动和会议" back-link></f7-navbar>
			<f7-toolbar tabbar>
				<f7-link active tab-link tab-link-active
					text="已参与"
					href="#involved"
				></f7-link>
				<f7-link tab-link
					text="全部"
					href="#all-activity"
				></f7-link>
			</f7-toolbar>
			<f7-tabs>
				<f7-tab id="involved" tab-active>
					<involved></involved>
				</f7-tab>
				<f7-tab id="all-activity">
					<all-activity></all-activity>
				</f7-tab>
			</f7-tabs>
	</f7-page>
</template>

<script>
import Involved from './involved.vue';
import AllActivity from './activity-all.vue';

export default {
	name: 'activity',
	components: {
		Involved,
		AllActivity
	},
	mounted() {
		if (!this.isLogin) {
			this.$f7router.navigate('/login/');
		}
	},
	computed: {
		isLogin() {
			return this.$store.state.signedIn;
		}
	}
}
</script>

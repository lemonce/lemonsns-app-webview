<template>

<f7-page name="questionnaire and vote">
	<f7-navbar title="填填看" back-link></f7-navbar>

	<!-- <f7-block-title class="margin-vertical">正在进行中</f7-block-title>
	<f7-list media-list class="margin-vertical">
		<f7-list-item
			title="[投票]xx 投票-2"
			link="/vote/4"
			after="2018/03/14"></f7-list-item>
		<f7-list-item
			title="[问卷]xx 问卷-3"
			link="/questionnaire"
			after="2018/03/10"></f7-list-item>
	</f7-list>

	<f7-block-title class="margin-vertical">已结束</f7-block-title>
	<f7-list media-list class="margin-vertical">
		<f7-list-item
			title="[投票]xx 投票-1"
			link
			after="2018/01/29"></f7-list-item>
	</f7-list> -->

	<f7-toolbar tabbar>
		<f7-link active tab-link tab-link-active
			text="全部问卷"
			href="#all-survey"
		></f7-link>
		<f7-link tab-link
			text="全部投票"
			href="#all-vote"
		></f7-link>
	</f7-toolbar>
	<f7-tabs>
		<f7-tab id="all-survey" tab-active>
			<all-survey></all-survey>
		</f7-tab>
		<f7-tab id="all-vote">
			<all-vote></all-vote>
		</f7-tab>
	</f7-tabs>
</f7-page>
</template>

<script>
import AllSurvey from './questionnaire-list.vue';
import AllVote from './vote-list.vue';

export default {
	name: 'filling',
	components: {
		AllSurvey,
		AllVote
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


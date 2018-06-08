<template>

<div>
	<f7-block-title class="margin-vertical">正在进行中</f7-block-title>
	<f7-list media-list class="margin-vertical">
		<f7-list-item
			title="活动-2"
			link
			text="2018/01/29"></f7-list-item>
		<f7-list-item
			title="活动-3"
			link
			text="2018/03/10"></f7-list-item>
	</f7-list>

	<f7-block-title class="margin-vertical">即将开始</f7-block-title>
	<f7-list media-list class="margin-vertical">
		<f7-list-item
			title="活动-4"
			link
			text="2018/03/26"></f7-list-item>
		<f7-list-item
			title="活动-5"
			link
			text="2018/04/17"></f7-list-item>
	</f7-list>

	<f7-block-title class="margin-top">已结束</f7-block-title>
	<f7-list media-list>
		<f7-list-item
			title="活动-1"
			link
			text="2017/12/30"></f7-list-item>
		<f7-list-item
			title="活动-II"
			link
			text="2017/12/12"></f7-list-item>
		<f7-list-item
			title="活动-X"
			link
			text="2017/11/08"></f7-list-item>
	</f7-list>
</div>
</template>

<script>
import axios from '../../axios.js';

export default {
	name: 'activity',
	data() {
		return {
			activityList: []
		}
	},
	methods: {
		getActivityList() {
			return axios.get('app/activity').then(res => {
				// console.log(res.data.data);
				this.activityList = res.data.data;
			})
		}
	},
	mounted() {
		if (!this.$store.state.signedIn) {
			this.$f7router.navigate('/login');
		} else {

			this.getActivityList();
		}
	}
}
</script>

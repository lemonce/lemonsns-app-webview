<template>

<!-- <div>
	<f7-block-title class="margin-vertical">正在进行中</f7-block-title>
	<f7-list media-list class="margin-vertical">
		<f7-list-item
			title="五一纪念活动"
			link="/activity-detail"
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
			text="2017/12/18"></f7-list-item>
	</f7-list>
</div> -->
<div>
	<f7-block-title class="margin-vertical">正在进行中</f7-block-title>
	<f7-list media-list class="margin-vertical">
		<f7-list-item
			v-if="hasUnderwayList"
			v-for="(underway, index) in underwayList" :key="index"
			:title="underway.title"
			:link="`/activity-detail/${underway.id}`"
			:text="underway.created_at"></f7-list-item>
		<f7-list-item>
			<f7-block-title v-if="!hasUnderwayList">没有正在进行的活动/会议</f7-block-title>
		</f7-list-item>
	</f7-list>

	<f7-block-title class="margin-vertical">即将开始</f7-block-title>
	<f7-list media-list class="margin-vertical">
		<f7-list-item
			v-if="hasComingList"
			v-for="(coming, index) in comingList" :key="index"
			:title="coming.title"
			:link="`/activity-detail/${coming.id}`"
			:text="coming.created_at"></f7-list-item>
		<f7-list-item>
			<f7-block-title v-if="!hasComingList">没有即将开始的活动/会议</f7-block-title>
		</f7-list-item>
	</f7-list>

	<f7-block-title class="margin-top">已结束</f7-block-title>
	<f7-list media-list>
		<f7-list-item
			v-if="hasEnded"
			v-for="(end, index) in endedList" :key="index"
			:title="end.title"
			link
			:text="end.created_at"></f7-list-item>
		<f7-list-item>
			<f7-block-title v-if="!hasEnded">没有已经结束的活动/会议</f7-block-title>
		</f7-list-item>
	</f7-list>
</div>
</template>

<script>
import axios from '../../axios.js';
import dateFormat from 'dateformat';

export default {
	name: 'activity',
	data() {
		return {
			underwayList: [],
			comingList: [],
			endedList: [],
			hasUnderwayList: true,
			hasComingList: true,
			hasEnded: true
		}
	},
	methods: {
		getActivityList() {
			return axios.get('app/attendance/activity').then(res => {
				const activityList = res.data.data;
				const date = new Date();

				activityList.forEach(activity => {
					const start = new Date(activity.start);
					const end = new Date(activity.end);
					const now = new Date();

					activity.created_at = dateFormat(activity.created_at, 'yyyy/mm/dd HH:MM');

					if (start > now) {
						this.comingList.push(activity);
					}

					if (start < now && now < end) {
						this.underwayList.push(activity);
					}

					if (now > end) {
						this.endedList.push(activity);
					}
				});

				if (this.comingList.length === 0) {
					this.hasComingList = false;
				}

				if (this.underwayList.length === 0) {
					this.hasUnderwayList = false;
				}

				if (this.endedList.length === 0) {
					this.hasEnded = false;
				}
				
			}).catch((err) => {
				this.hasComingList = false;
				this.hasUnderwayList = false;
				this.hasEnded = false;
			});
		}
	},
	mounted() {
		if(this.$store.state.signedIn) {
			this.getActivityList();
		}
	}
}
</script>


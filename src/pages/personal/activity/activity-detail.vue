<template>

<f7-page name="activity-detail">
	<f7-navbar :title="activity.title" back-link></f7-navbar>

	<f7-block-title class="margin-top">活动标题</f7-block-title>
	<f7-list class="no-margin" id="activityDetail">
		<f7-list-item :title="activity.title"></f7-list-item>
	</f7-list>

	<!-- <f7-block-title class="margin-top" v-if="hasActivityTag">活动标签</f7-block-title>
	<f7-block strong class="margin-vertical" v-if="hasActivityTag">
		<p>
			<f7-badge v-for="(item, index) in tag" :key="index">{{item}}</f7-badge>
		</p>
	</f7-block> -->

	<f7-block-title class="margin-top">活动详情</f7-block-title>
	<f7-list class="no-margin">
		<f7-list-item title="开始时间" :after="activity.start"></f7-list-item>
		<f7-list-item title="结束时间" :after="activity.end"></f7-list-item>
		<f7-list-item title="地点" :after="activity.location"></f7-list-item>
	</f7-list>
	
	<f7-block-title class="margin-top">活动摘要</f7-block-title>
	<f7-block strong class="margin-vertical">
		<p>{{activity.abstract}}</p>
	</f7-block>

	<f7-block-title class="margin-top">活动内容</f7-block-title>
	<f7-block strong>
		<p>{{activity.description}}</p>
	</f7-block>

	<f7-block-title class="margin-top">是否已参与</f7-block-title>
	<f7-list class="no-margin">
		<f7-list-item :title="text"></f7-list-item>
	</f7-list>

</f7-page>
</template>

<script>
import axios from '../../axios.js';
import dateFormat from 'dateformat';

export default {
	name: 'activity-detail',
	data() {
		return {
			activity: {},
			attendance: {},
			hasAttendance: false,
			hasActivityTag: true,
			tag: [],
			text: ''
		}
	},
	methods: {
		getActivity() {
			return axios.get(`app/activity/${this.activityId}`).then(res => {
				const {activity, attendance} = res.data.data;

				activity.start = dateFormat(activity.start, 'yyyy/mm/dd HH:MM');
				activity.end = dateFormat(activity.end, 'yyyy/mm/dd HH:MM');
				
				this.activity = activity;

				if (!attendance) {
					this.text = '不在活动/会议的参与名单内';
				}

				if (attendance && !attendance.time) {
					this.text = '未签到';
				}

				if (attendance && attendance.time) {
					this.text = '已签到';

					this.attendance = attendance;
				}
			});
		},
		getActivityTag() {
			return axios.get(`app/activity/${this.activityId}/tag`).then(res => {
				const tag = res.data.data;

				if (tag.length === 0) {
					this.hasActivityTag = false;
				}

				this.tag = tag;
			});
		}
	},
	mounted() {
		this.activityId = this.$f7Route.params.id;

		this.getActivity();

		// this.getActivityTag();
	} 
}
</script>

<style lang="less">
#activityDetail .item-title {
	word-wrap: break-word;
	white-space: pre-wrap;
}
</style>



<template>
<div>
    <f7-block-title class="margin-vertical">正在进行中</f7-block-title>
	<f7-list media-list class="margin-vertical">
		<f7-list-item
			v-if="hasUnderwayList"
			v-for="(underway, index) in underwayList" :key="index"
			:title="underway.title"
			:link="`/vote/${underway.id}`"
			:text="underway.created_at"></f7-list-item>
		<f7-list-item>
			<f7-block-title v-if="!hasUnderwayList">没有正在进行的投票</f7-block-title>
		</f7-list-item>
	</f7-list>

	<f7-block-title class="margin-top">已结束</f7-block-title>
	<f7-list media-list>
		<f7-list-item
			v-if="hasEnded"
			v-for="(end, index) in endedList" :key="index"
			:title="end.title"
			:text="end.created_at"></f7-list-item>
		<f7-list-item>
			<f7-block-title v-if="!hasEnded">没有已经结束的投票</f7-block-title>
		</f7-list-item>
	</f7-list>
</div>
</template>

<script>
import axios from '../axios.js';
import dateFormat from 'dateformat';

export default {
	name: 'vote-list',
	data() {
		return {
			underwayList: [],
			endedList: [],
			hasUnderwayList: true,
			hasEnded: true
		}
	},
	methods: {
		getVoteList() {
			return axios.get('app/vote').then(res => {
				const voteList = res.data.data;
				const date = new Date();

				voteList.forEach(vote => {
					const end = new Date(vote.time);
					const now = new Date();

					vote.created_at = dateFormat(vote.created_at, 'yyyy/mm/dd HH:MM');

					if (now < end) {
						this.underwayList.push(vote);
					}

					if (now > end) {
						this.endedList.push(vote);
					}
				});

				if (this.underwayList.length === 0) {
					this.hasUnderwayList = false;
				}

				if (this.endedList.length === 0) {
					this.hasEnded = false;
				}
				
			});
		}
	},
	mounted() {
		this.getVoteList();
	}
}
</script>


<template>
<div>
    <f7-block-title class="margin-vertical">正在进行中</f7-block-title>
	<f7-list media-list class="margin-vertical">
		<f7-list-item
			v-if="hasUnderwayList"
			v-for="(underway, index) in underwayList" :key="index"
			:title="underway.title"
			:link="`/questionnaire/${underway.id}`"
			:text="underway.created_at"></f7-list-item>
		<f7-list-item>
			<f7-block-title v-if="!hasUnderwayList">没有正在进行的问卷</f7-block-title>
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
			<f7-block-title v-if="!hasEnded">没有已经结束的问卷</f7-block-title>
		</f7-list-item>
	</f7-list>
</div>
</template>

<script>
import axios from '../axios.js';
import dateFormat from 'dateformat';

export default {
	name: 'questionnaire-list',
	data() {
		return {
			underwayList: [],
			endedList: [],
			hasUnderwayList: true,
			hasEnded: true
		}
	},
	methods: {
		getSurveyList() {
			return axios.get('app/survey').then(res => {
				const surveyList = res.data.data;
                const date = new Date();
                
				surveyList.forEach(survey => {
					const end = new Date(survey.time);
					const now = new Date();

					survey.created_at = dateFormat(survey.created_at, 'yyyy/mm/dd HH:MM');

					if (now < end) {
						this.underwayList.push(survey);
					}

					if (now > end) {
						this.endedList.push(survey);
					}
				});

				if (this.underwayList.length === 0) {
					this.hasUnderwayList = false;
				}

				if (this.endedList.length === 0) {
					this.hasEnded = false;
				}
				
			}).catch(err => {
				this.hasUnderwayList = false;
				this.hasEnded = false;
			});
		}
	},
	mounted() {
		this.getSurveyList();
	}
}
</script>


<template>

<f7-page name="questionnaire">
	<f7-navbar :title="survey.title" back-link></f7-navbar>

	<f7-block-title class="margin-top">规则</f7-block-title>
	<f7-block strong class="margin-vertical">
		<p v-if="survey.rule !== ''">{{survey.rule}}</p>
		<p v-if="survey.rule === ''">无填写规则</p>
	</f7-block>

	<f7-block-title class="margin-top">问卷内容</f7-block-title>

	<f7-list>
		<f7-list-group v-for="(item, index) in survey.content" :key="index">
			<f7-list-item :title="`${index + 1}.${item.question}`" group-title></f7-list-item>
			<f7-list-item
			checkbox
			v-for="(option, index) in item.options"
			:key="index"
			:title="option">
			</f7-list-item>
		</f7-list-group>
	</f7-list>
	

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill tab-link back>提交</f7-button>
			</f7-col>
		</f7-row>
	</f7-block>
	
</f7-page>
</template>

<script>
import axios from '../axios.js';

export default {
	name: 'questionnaire',
	data() {
		return {
			survey: {
				title: '',
				rule: '',
				content: []
			}
		}
	},
	methods: {
		getSurvey() {
			return axios.get(`/app/survey/${this.surveyId}`).then(res => {
				this.survey = res.data.data;

				console.log(this.survey);
			});
		}
	},
	mounted() {
		this.surveyId = this.$f7Route.params.id;

		this.getSurvey();
	}
}
</script>


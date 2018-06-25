<template>

<f7-page name="questionnaire">
	<f7-navbar :title="survey.title" back-link></f7-navbar>

	<!-- <f7-block-title class="margin-top" v-if="hasSurveyTag">活动标签</f7-block-title>
	<f7-block strong class="margin-vertical" v-if="haSurveyTag">
		<p>
			<f7-badge v-for="(item, index) in tag" :key="index">{{item}}</f7-badge>
		</p>
	</f7-block> -->

	<f7-block-title class="margin-top">填写规则</f7-block-title>
	<f7-block strong class="margin-vertical">
		<p v-if="survey.rule !== ''">{{survey.rule}}</p>
		<p v-if="survey.rule === ''">无填写规则</p>
	</f7-block>

	<f7-block-title class="margin-top">问卷内容</f7-block-title>

	<f7-list>
		<f7-list-group v-for="(item, number) in survey.content" :key="number">
			<f7-list-item :title="`${number + 1}.${item.question}`" group-title></f7-list-item>
			<f7-list-item
			checkbox
			v-for="(option, index) in item.options"
			:key="index"
			:title="option"
			@change="changeValue($event.target, number, index)">
			</f7-list-item>
		</f7-list-group>
	</f7-list>
	

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button :disabled="!canPost" big fill @click="beforePost()">提交</f7-button>
			</f7-col>
		</f7-row>
		<f7-row>
			<f7-col width="100">
				<f7-button big v-if="!canPost">你已经提交过该问卷！</f7-button>
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
			},
			canPost: true,
			hasSurveyTag: true,
			tag: []
		}
	},
	methods: {
		getSurvey() {
			return axios.get(`/app/survey/${this.surveyId}`).then(res => {
				this.survey = res.data.data;

				this.survey.content.forEach(option => {
					const regExpList = [/^(\d)$/, /^(\d)\s*,\s*(\d)$/];
					let alertText;

					option.answer = new Array(option.options.length).fill(0);

					if (option.range === '') {
						option.range = '1';
					}

					option.range = option.range.trim();

					const matched = regExpList.find((rule, index) => {
						return rule.test(option.range);
					});

					const [_, from, to] = option.range.match(matched);


					if (!to) {
						option.range = {
							from
						}
					} else {
						option.range = {
							from,
							to
						}
					}

					option.count = 0;
				});
			});
		},
		getActivityTag() {
			return axios.get(`app/survey/${this.surveyId}/tag`).then(res => {
				const tag = res.data.data;

				if (tag.length === 0) {
					this.hasSurveyTag = false;
				}

				this.tag = tag;
			});
		},
		changeValue(target, number, index) {
			if (target.checked) {
				this.survey.content[number].answer[index] = 1;

				this.survey.content[number].count++;
			} else {
				this.survey.content[number].answer[index] = 0;

				this.survey.content[number].count--;
			}
		},
		beforePost() {
			let alertText;

			const answer = [];

			this.survey.content.forEach((option, index) => {
				const from = option.range.from;
				const to = option.range.to;

				if (!to) {
					option.count != from ? alertText = `第${index + 1}道题，请选择${from}项` : undefined;
				} else {
					option.count < from ? alertText = `第${index + 1}道题，请选择至少${from}项` : undefined;
	
					option.count > to ? alertText = `第${index + 1}道题，请选择最多${to}项` : undefined;
				}

				answer.push(option.answer);
			});

			if (alertText) {
				
				const dialog = this.$f7.dialog.create({
					title: '警告',
					text: alertText,
					buttons: [{
						text: '确定',
						close: true
					}]
				});
	
				dialog.open();

				return;
			}

			const dialog = this.$f7.dialog.create({
				title: '提示',
				text: '一旦提交则不可更改，是否确认提交？',
				buttons: [{
					text: '确定',
					close: true
				}, {
					text: '取消',
					close: true
				}],
				onClick: (dialog, index) => {
					if (index === 0) {
						this.postSample(answer);
					}
				}
			});

			dialog.open();
		},
		getSample() {
			return axios.get(`app/survey/${this.surveyId}/sample`).then(res => {
				this.canPost = false;
			}).catch(err => {
				console.log(err.message);
			});
		},
		postSample(answer) {
			//接口权限有点问题
			return axios.post(`app/survey/${this.surveyId}/sample`, {
				answer
			}).catch(err => {
				this.$store.dispatch('openMessageBox',
                    {
                        content: '问卷提交失败！',
                        type: '填一填/问卷'
                    }
                );

                this.$f7router.navigate('/index/');
			});
		}
	},
	mounted() {
		this.surveyId = this.$f7Route.params.id;

		this.getSurvey();
	}
}
</script>


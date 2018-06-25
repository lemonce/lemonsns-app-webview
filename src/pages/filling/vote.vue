<template>

<f7-page name="vote">
	<f7-navbar :title="vote.title" back-link></f7-navbar>

	<!-- <f7-block-title class="margin-top" v-if="hasVoteTag">活动标签</f7-block-title>
	<f7-block strong class="margin-vertical" v-if="hasVoteTag">
		<p>
			<f7-badge v-for="(item, index) in tag" :key="index">{{item}}</f7-badge>
		</p>
	</f7-block> -->

	<f7-block-title class="margin-top">问题</f7-block-title>
	<f7-block class="margin-top">{{vote.question}}</f7-block>

	<f7-block-title class="margin-top">填写规则</f7-block-title>
	<f7-block strong class="margin-vertical">
		<p v-if="vote.rule !== ''">{{vote.rule}}</p>
		<p v-if="vote.rule === ''">无填写规则</p>
	</f7-block>

	<div v-if="!isVoted">
		
		<f7-list>
			<f7-list-item
			checkbox
			v-for="(option, index) in vote.options"
			:key="index"
			:title="option"
			@change="checkedValue($event.target, index)">
			</f7-list-item>
		</f7-list>

	</div>
	
	<div v-if="isVoted">

		<f7-list>
			<f7-list-item
			v-for="(option, index) in vote.options"
			:key="index"
			:title="option"
			:after="computeResult(index)">
			</f7-list-item>
		</f7-list>

	</div>

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill @click="beforePost()">提交</f7-button>
			</f7-col>
		</f7-row>
	</f7-block>

</f7-page>
</template>

<script>
import axios from '../axios';

export default {
	data() {
		return {
			vote: {
				question: '',
				options: [],
				rule: '',
				range: ''
			},
			answer: [],
			report: {
				statistic : [],
				count: 0
			},
			isVoted: false,
			count: 0,
			hasVoteTag: true,
			tag: []
		}
	},
	mounted() {
		this.voteId = this.$f7Route.params.id;
		this.getVote();
		this.getSample();
		// this.getVoteTag();
	},
	methods: {
		checkedValue(target,index) {
			
			if (target.checked) {
				this.answer[index] = 1;

				this.count++;
			} else {
				this.answer[index] = 0;

				this.count--;
			}
		},
		computeResult(index) {
			if (this.isVoted === false) {
				return null;
			}

			const { statistic, count } = this.report;

			const optionCount = statistic[index];

			if (count !== 0) {
				const percent = Math.round((optionCount * 100)/ count);

				return `${optionCount}票 ${percent}%`;
			} else {
				return `${optionCount}票`;
			}

		},
		getVote() {
			return axios.get(`app/vote/${this.voteId}`).then(res => {
				this.vote = res.data.data;
				this.answer = new Array(this.vote.options.length).fill(0);
			}).catch(err => {
				console.log(err.message);
			}).catch(err => {
				this.$store.dispatch('openMessageBox',
                    {
                        content: '投票获取失败！',
                        type: '填一填/投票'
                    }
                );

                this.$f7router.navigate('/index/');
			});
		},
		getVoteTag() {
			return axios.get(`app/vote/${this.voteId}/tag`).then(res => {
				const tag = res.data.data;

				if (tag.length === 0) {
					this.hasVoteTag = false;
				}

				this.tag = tag;
			});
		},
		getReport() {
			return axios.get(`app/vote/${this.voteId}/report`).then(res => {
				this.report = res.data.data;

				let count = 0;

				this.report.statistic.forEach(optionCount => count += optionCount);

				this.report.count = count;
			}).catch(err => {
				console.log(err.message);
			});
		},
		getSample() {
			return axios.get(`app/vote/${this.voteId}/sample`).then(res => {
				this.isVoted = true;
				this.getReport();
			}).catch(err => {
				console.log(err.message);
			});
			// return axios.get(`app/vote?self=true`).then(res => {
			// 	res.data.data.forEach(vote => {
			// 		if (vote.id === this.voteId) {
			// 			this.isVoted = true;
			// 		}
			// 	});
			// }).catch(err => {
			// 	console.log(err.message);
			// });

			//以后打开这个地方
		},
		beforePost() {
			const regExpList = [/^(\d)$/, /^(\d)\s*,\s*(\d)$/];
			let alertText;

			if (this.vote.range === '') {
				this.vote.range = '1';
			}

			this.vote.range = this.vote.range.trim();

			const matched = regExpList.find((rule, index) => {
				
				return rule.test(this.vote.range);
			});

			const [_, from, to] = this.vote.range.match(matched);

			if (!to) {
				this.count != from ? alertText = `请选择${from}项` : undefined;
			} else {
				this.count < from ? alertText = `请选择至少${from}项` : undefined;

				this.count > to ? alertText = `请选择最多${to}项` : undefined;
			}

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
						this.postSample();
					}
				}
			});

			dialog.open();
		},
		postSample() {
			//接口权限有点问题
			return axios.post(`app/vote/${this.voteId}/sample`, {
				answer: this.answer
			}).then(res => {
				this.isVoted = true;
			}).catch(err => {
				this.$store.dispatch('openMessageBox',
                    {
                        content: '投票失败！',
                        type: '填一填/投票'
                    }
                );

                this.$f7router.navigate('/index/');
			});
		}
	}
}
</script>

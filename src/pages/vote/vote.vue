<template>

<f7-page name="vote">
	<f7-navbar :title="vote.question" back-link></f7-navbar>

	<f7-block inset>
		<p>{{vote.rule}}</p>
	</f7-block>

	<div v-if="!isVoted">
		
		<f7-list>
			<f7-list-item
			checkbox
			v-for="(option, index) in vote.options"
			:key="index"
			:title="option"
			@change="answer[index] = $event.target.checked;">
			</f7-list-item>
		</f7-list>

	</div>
	
	<div v-else>

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
				<f7-button big fill @click="postSample()">提交</f7-button>
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
				question: '你喜欢本应用吗',
				options: [
					'喜欢',
					'不喜欢'
				],
				rule: '单选',
				range: '1'
			},
			answer: [],
			report: {
				statistic : [
					100,
					50
				],
				count: 150
			},
			isVoted: false
		}
	},
	mounted() {
		this.voteId = this.$f7Route.params.id;
		this.getVote();
		this.getSample();
	},
	methods: {
		computeResult(index) {
			if (this.isVoted == false) {
				return null;
			}

			const { statistic, count } = this.report;

			const optionCount = statistic[index];
			const percent = Math.round((optionCount * 100)/ count);

			return `${optionCount}票 ${percent}%`;
		},
		getVote() {
			return axios.get(`app/vote/${this.voteId}`).then(res => {
				this.vote = res.data.data;
				this.answer = new Array(this.vote.options.length).fill(0);
			}).catch(err => {
				console.log(err.message);
			});
		},
		getSample() {
			return axios.get(`app/vote/${this.voteId}/sample`).then(res => {
				if (res.status == 200) {
					this.isVoted = true;
					this.getReport();
				}
			}).catch(err => {
				console.log(err.message);
			});
		},
		postSample() {
			const answer = [];
			let count = 0;

			this.answer.forEach((item, index) => {
				if(item) {
					answer[index] = 1;
					count++;
				} else {
					answer[index] = 0;
				}
			});

			const range = this.vote.range.split(',');

			if (range.length == 1) {
				if (count != range[0]) {
					alert(`请选择${range[0]}项`);
					return;
				}
			} else if (range.length == 2) {
				if (count < range[0] || count > range[1]) {
					alert(`请选择${range[0]}到${range[1]}项`);
					return;
				}
			}

			// return axios.post(`app/vote/${this.voteId}/sample`, { answer }).then(res => {
			// 	if (res.status == 200) {
			// 		this.isVoted = true;
			// 	}
			// }).catch(err => {
			// 	console.log(err.message);
			// });
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
		}
	}
}
</script>

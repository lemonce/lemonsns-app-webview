<template>

<f7-page name="advice-detail">
	<f7-navbar title="详情" back-link></f7-navbar>

	<f7-block strong class="margin-top">
		{{advice.content}}
	</f7-block>
	<f7-block-footer>
		{{advice.created_at|timeFormat}}
	</f7-block-footer>
</f7-page>
</template>

<script>
import axios from '../../axios.js';
import dateFormat from 'dateformat';

export default {
	name: 'advice-detail',
	data() {
		return {
			advice: {}
		}
	},
	computed: {
		adviceId() {
			return this.$f7route.params.id;
		}
	},
	methods: {
		getAdvice() {
			return axios.get(`app/advise/${this.adviceId}`)
				.then(res => {
					this.advice = res.data.data;
				})
		}
	},
	mounted() {
		this.getAdvice();
	},
	filters: {
		timeFormat(time) {
			return dateFormat(time, 'yyyy/mm/dd HH:MM');
		}
	}
}
</script>

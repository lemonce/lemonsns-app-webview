<template>

<f7-page name="advice">
	<f7-navbar title="我的建言" back-link></f7-navbar>

	<f7-list class="no-margin-top">
		<f7-list-item
			v-if="hasAdvice"
			v-for="(advice, index) in adviceList"
			:key="index"
			:link="`/advice-detail/${advice.id}`"
			:title="advice.content"
			:after="advice.created_at|timeFormat">
		</f7-list-item>
	</f7-list>
	<f7-block-title v-if="!hasAdvice">你还没有任何建言！</f7-block-title>
</f7-page>
</template>

<script>
import axios from '../../axios.js';
import dateFormat from 'dateformat';

export default {
	name: 'advice',
	data() {
		return {
			adviceList: [],
			hasAdvice: true
		}
	},
	methods: {
		getAdviceList() {
			return axios.get('app/advise').then(res => {
				this.adviceList = res.data.data;

				if (this.adviceList.length === 0) {
					this.hasAdvice = false;
				}
			});
		}
	},
	mounted() {
		this.getAdviceList();
	},
	filters: {
		timeFormat(time) {
			return dateFormat(time, 'yyyy/mm/dd');
		}
	}
}
</script>

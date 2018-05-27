<template>

<f7-page name="advice">
	<f7-navbar title="我的建言" back-link></f7-navbar>

	<f7-list class="no-margin-top">
		<f7-list-item
			v-for="(advice, index) in adviceList"
			:key="index"
			:link="`/advice-detail/${advice.id}`"
			:title="advice.content"
			:after="advice.created_at|timeFormat">
		</f7-list-item>
	</f7-list>
</f7-page>
</template>

<script>
import axios from '../../../../axios.js';
import dateFormat from 'dateformat';

export default {
	name: 'advice',
	data() {
		return {
			adviceList: []
		}
	},
	methods: {
		getAdviceList() {
			return axios.get('app/advise').then(res => {
				this.adviceList = res.data.data;
			})
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

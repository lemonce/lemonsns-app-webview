<template>

<div>
	<f7-list class="no-margin-top">
		<f7-list-item swipeout
			v-for="(channel, index) in channelList"
			:key="index"
			:title="channel.id"
			@swipeout:deleted="deleteSubscribe(channel.id)">
			<f7-swipeout-actions>
				<f7-swipeout-button delete>取消关注</f7-swipeout-button>
			</f7-swipeout-actions>
		</f7-list-item>
	</f7-list>
</div>
</template>

<script>
import axios from '../../../../axios.js';

export default {
	data() {
		return {
			channelList: []
		}
	},
	mounted() {
		this.getSubscribe();
	},
	methods: {
		getSubscribe() {
			return axios.get(`app/account/channel`).then(res => {
					this.channelList = res.data.data;
				});
		},
		deleteSubscribe(channelId) {
			return axios.delete(`app/account/channel/${channelId}`)
				.catch(err => {
					console.log(err.message);
				});
		}
	}
}
</script>


<template>

<div>
	<f7-list class="no-margin-top">
		<!-- <f7-list-item title="频道 1">
		</f7-list-item>
		<f7-list-item swipeout title="频道 2" @swipeout:deleted="onSwipeoutDeleted">
			<f7-swipeout-actions>
				<f7-swipeout-button delete>取消关注</f7-swipeout-button>
			</f7-swipeout-actions>
		</f7-list-item> -->
		<f7-list-item swipeout
			v-for="(channel, index) in channelList"
			v-bind:key="index"
			:title="channel.name" @swipeout:deleted="onSwipeoutDeleted">
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
					const channelList = res.data.data;
					
					
	
					channelList.forEach(channel => {
						this.channelList.push({
							name: channel.channel.name,
							id: channel.channel.id
						})
					});

				});
		},
		changeStatus(channel) {
			const {isFollow, id} = channel;

			if (!isFollow) {
				return axios.post(`app/account/channel/${id}`);
			} else {
				return axios.delete(`app/account/channel/${id}`);
			}
		}
	}
}
</script>


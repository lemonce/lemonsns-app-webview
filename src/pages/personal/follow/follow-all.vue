<template>

<div>
	<f7-list class="no-margin-top">
		<f7-list-item v-for="(channel, index) in channelList"
			v-bind:key="index"
			:title="channel.name">
			<f7-toggle slot="after" :disabled="channel.disabled" :checked="channel.isFollow"
				@change="changeStatus(channel)"></f7-toggle>
		</f7-list-item>
		<!-- <f7-list-item
			title="频道 2">
			<f7-toggle slot="after" checked></f7-toggle>
		</f7-list-item>
		<f7-list-item
			title="频道 3">
			<f7-toggle slot="after"></f7-toggle>
		</f7-list-item>
		<f7-list-item
			title="频道 4">
			<f7-toggle slot="after"></f7-toggle>
		</f7-list-item> -->
	</f7-list>
</div>
</template>
<script>
import axios from 'axios';
import {baseUrl} from '../../../../config.json';

export default {
	data() {
		return {
			channelList: []
		}
	},
	mounted() {
		this.getChannelList().then(() => {
			this.getSubscribe();
		})
	},
	methods: {
		getChannelList() {
			return axios.get(`${baseUrl}/app/channel`).then(res => {
				const channelList = res.data.data;

				channelList.forEach(channel => {
					const newChannel = {};

					newChannel.name = channel.name;
					newChannel.id = channel.id;
					newChannel.isFollow = false;
					newChannel.disabled = false;

					this.channelList.push(newChannel);
				});

				this.channelList[0].disabled = true;
			});
		},
		getSubscribe() {
			return axios.get(`${baseUrl}/app/account/channel`).then(res => {
				const channelList = res.data.data;

				channelList.forEach(channel => {
					this.channelList.forEach(item => {
						if (channel.channelId === item.id) {
							item.isFollow = true;
						}
					});
				});
			});
		},
		changeStatus(channel) {
			const {isFollow, id} = channel;

			if (!isFollow) {
				return axios.post(`${baseUrl}/app/account/channel/${id}`);
			} else {
				return axios.delete(`${baseUrl}/app/account/channel/${id}`);
			}
		}
	}
}
</script>


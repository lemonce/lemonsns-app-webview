<template>

<f7-page name="channel">
	<f7-navbar title="xx 频道" back-link></f7-navbar>

	<f7-list media-list class="no-margin">
		<f7-list-item
			:title="`${channel.name}频道`">
			<f7-icon slot="media" material="album" size="44px" color="yellow"></f7-icon>
			<f7-chip slot="text" color="green">
				<f7-link :text="channel.status" slot="text" href="/channel" color="white"></f7-link>
			</f7-chip>
		</f7-list-item>
	</f7-list>

	<f7-block-title class="margin-top">频道简介</f7-block-title>
	<f7-block strong>
		<p>{{channel.description}}</p>
	</f7-block>
</f7-page>
</template>

<script>
import axios from '../axios.js';

export default {
	data() {
		return {

			id: this.$f7Route.params.id,
			channel: {
				name: '',
				status: '关注',
				description: ''
			}
		}
	},
	mounted() {
		this.getChannel().then(() => {
			this.getSubscribe();
		});
	},
	methods: {
		getChannel() {
			return axios.get(`app/channel/${this.id}`).then(res => {
				this.channel.name = res.data.data.name;
				this.channel.description = res.data.data.description;
			});
		},
		getSubscribe() {
			return axios.get(`app/account/channel`).then(res => {
				const channelList = res.data.data;
				const subscribe = [];

				channelList.forEach(channel => {
					subscribe.push(channel.name);
				});

				subscribe.forEach(item => {
					if (item === this.channel.name) {
						this.channel.status = '未关注';
					}
				})
			});
		}
	}
}
</script>


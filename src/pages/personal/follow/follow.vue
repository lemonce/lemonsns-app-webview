<template>

<f7-page name="follow">
	<f7-navbar title="关注管理" back-link></f7-navbar>

	<f7-toolbar tabbar>
		<f7-link active tab-link tab-link-active
			text="已关注"
			href="#already"
		></f7-link>
		<f7-link tab-link
			text="全部"
			href="#all-follow"
		></f7-link>
	</f7-toolbar>
	<f7-tabs>
		<f7-tab id="already" tab-active>
			<!-- <already></already> -->
			<f7-list class="no-margin-top">
				<f7-list-item swipeout
					v-for="(channel, index) in subscribe"
					:key="index"
					:title="channel.ufwdChannel.name">
					<!-- <f7-swipeout-actions>
						<f7-swipeout-button delete>取消关注</f7-swipeout-button>
					</f7-swipeout-actions> -->
				</f7-list-item>
			</f7-list>
		</f7-tab>
		<f7-tab id="all-follow">
			<!-- <all-follow></all-follow> -->
			<f7-list class="no-margin-top">
				<f7-list-item v-for="(channel, index) in channelList"
					:key="index"
					:title="channel.name">
					<f7-toggle slot="after"
						:disabled="channel.disabled"
						:checked="channel.isFollow"
						@change="followChannel(channel)"></f7-toggle>
				</f7-list-item>
			</f7-list>
		</f7-tab>
	</f7-tabs>
</f7-page>

</template>

<script>
import axios from '../../axios.js';

export default {
	name: 'follow',
	data() {
		return {
			channelList: [],
			subscribe: []
		}
	},
	mounted() {
		this.getList();
	},
	methods: {
		getList() {
			this.getSubscribe().then(() => {
				this.getChannelList();
			}).catch(err => {
				console.log(err.message);
			});
		},
		deleteSubscribe(channelId) {
			return axios.delete(`app/account/channel/${channelId}`).catch(err => {
				console.log(err.message);
			});
		},
		getChannelList() {
			return axios.get(`app/channel`).then(res => {
				
				this.channelList = res.data.data;

				this.channelList.forEach(channel => {
					channel.isFollow = false;

					this.subscribe.forEach(item => {
						if (item.channelId === channel.id) {
							channel.isFollow = true;
						}
					})
				});
			});
		},
		getSubscribe() {
			return axios.get(`app/account/channel`).then(res => {
				this.subscribe = res.data.data;
			});
		},
		followChannel(channel) {
			const {isFollow, id} = channel;

			if (!isFollow) {
				return axios.post(`app/account/channel/${id}`).then(() => {
					this.getList();
				});
			} else {
				return axios.delete(`app/account/channel/${id}`).then(() => {
					this.getList();
				});
			}
		}
	}
}
</script>

<template>

<div>
	<f7-block-title v-if="!hasMessage">当前没有消息通知！</f7-block-title>
	<f7-list media-list class="no-margin-top" v-if="hasMessage">
		<!-- <f7-list-item
			link="/message-content"
			title="系统消息"
			subtitle="活动"
			text="您参加的活动将于xx号开始。"></f7-list-item> -->
		<f7-list-item
			v-for="(message, index) in messagePool"
			:key="index"
			:text="message.created_at"
			:subtitle="message.content"
			swipeout
			@swipeout:delete="deleteMessage(message.id)">
			<f7-swipeout-actions>
				<f7-swipeout-button delete>删除</f7-swipeout-button>
			</f7-swipeout-actions>
		</f7-list-item>
	</f7-list>
</div>

</template>

<script>
import axios from '../axios.js';
import Login from '../account/login';
import dateFormat from 'dateformat';

export default {
	name: 'message',
	data() {
		return {
			messagePool: [],
			hasMessage: true
		}
	},
	components: {
		Login
	},
	methods: {
		getMessagePool() {
			return axios.get('app/notification').then(res => {
				const messageList = res.data.data;

				if (messageList.length === 0) {
					this.hasMessage = false;
				}

				messageList.forEach(message => {
					message.created_at = dateFormat(message.created_at, 'yyyy/mm/dd HH:MM');
				});

				this.messagePool = messageList;
			}).catch(err => {
				this.hasMessage = false;
			})
		},
		deleteMessage(id) {
			return axios.delete(`app/notification/${id}`).catch(err => {
				this.$store.dispatch('openMessageBox',
                    {
                        content: '消息删除失败！',
                        type: '消息'
                    }
                );

                this.$f7router.navigate('/index/');
			});
		}
	},
	computed: {
		isLogin() {
			return this.$store.state.signedIn;
		}
	},
	mounted() {
		if (!this.isLogin) {
			this.$f7router.navigate('/login/');
		} else {
			this.getMessagePool();
		}		
	}
}
</script>

<style lang="less">
.list .item-subtitle {
	word-wrap: break-word;
	white-space: pre-wrap;
}
</style>

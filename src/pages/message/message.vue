<template>

<div>
	<f7-list media-list class="no-margin-top" v-if="isLogin">
		<f7-list-item
			link="/message-content"
			title="系统消息"
			subtitle="活动"
			text="您参加的活动将于xx号开始。"></f7-list-item>
		<f7-list-item
			link=""
			title="系统通知"
			subtitle="审核"
			text="您的账户已通过审核。"></f7-list-item>
		<f7-list-item
			>
		</f7-list-item>
	</f7-list>
	<login v-if="!isLogin"></login>
</div>

</template>

<script>
import axios from '../axios.js';
import Login from '../account/login';

export default {
	name: 'message',
	data() {
		return {
			messagePool: []
		}
	},
	components: {
		Login
	},
	methods: {
		getMessagePool() {
			return axios.get('app/notification').then(res => {
				console.log(res.data.data);
			})
		}
	},
	computed: {
		isLogin() {
			return this.$store.state.signedIn;
		}
	}
}
</script>
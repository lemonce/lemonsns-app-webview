<template>

<div>

	<div id="personal-page">
		<f7-list media-list class="margin-top no-margin-bottom">
			<f7-list-item
				:link="`/personal-info`"
				:title="account.name"
				:subtitle="account.ufwdAccount.sex">
				<f7-icon material="person" slot="media" size="44px"></f7-icon>
			</f7-list-item>

			<f7-row no-gap>
				<f7-col>
					<f7-link
						href="/card"
						icon-f7="card"
						text="我的名片"
						color="black"
						class="no-margin padding-vertical"
					></f7-link>
				</f7-col>
				<f7-col>
					<f7-link
						href="/collection"
						icon-f7="star"
						text="收藏"
						color="black"
						class="no-margin padding-vertical"
					></f7-link>
				</f7-col>
				<f7-col>
					<f7-link
						href="/follow"
						icon-f7="eye"
						text="关注"
						color="black"
						class="no-margin padding-vertical"
					></f7-link>
				</f7-col>
			</f7-row>
		</f7-list>

		<f7-list class="margin-top">
			<f7-list-item
				link="/track"
				title="足迹">
				<f7-icon slot="media" material="event_note"></f7-icon>
			</f7-list-item>
			<f7-list-item
				link="/activity"
				title="我的活动">
				<f7-icon slot="media" material="alarm_on"></f7-icon>
			</f7-list-item>
			<f7-list-item
				link="/advice"
				title="我的建言">
				<f7-icon slot="media" material="chat"></f7-icon>
			</f7-list-item>
			<f7-list-item
				link="/feedback"
				title="反馈">
				<f7-icon slot="media" material="content_paste"></f7-icon>
			</f7-list-item>
		</f7-list>

		<f7-list class="margin-top">
			<f7-list-item
				link="/setting"
				title="设置">
				<f7-icon slot="media" material="brightness_low"></f7-icon>
			</f7-list-item>
		</f7-list>

	</div>
</div>

</template>

<script>
import axios from '../axios.js';
import Login from '../account/login';

export default {
	name: 'personal',
	components: {
		Login
	},
	data() {
		return {
			account: {
				name: '',
				ufwdAccount: {}
			}
		}
	},
	mounted() {
		this.getAccount();
	},
	methods: {
		getAccount() {
			return axios.get(`app/account`).then(res => {
				this.account = res.data.data;
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

<style lang="less">
#personal-page {
	div.col {
		text-align: center;
		background: #fff;
		border: 1px solid #ddd;
	}
}

</style>

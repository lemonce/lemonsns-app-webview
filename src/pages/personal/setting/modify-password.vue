<template>

<f7-page name="modify-password">
	<f7-navbar title="修改密码" back-link></f7-navbar>

	<f7-list class="margin-top">
		<f7-list-item>
			<f7-label>新密码</f7-label>
			<f7-input
				name="new-password"
				type="password"
				:value="newPassword"
				@input="newPassword = $event.target.value">
			</f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>确认密码</f7-label>
			<f7-input
				name="confirm-password"
				type="password"
				:value="confirmPassword"
				@input="confirmPassword = $event.target.value">
			</f7-input>
		</f7-list-item>
	</f7-list>

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill tab-link
					@click="updatePassword()">保存</f7-button>
			</f7-col>
		</f7-row>
	</f7-block>
</f7-page>
</template>

<script>
import axios from '../../../../axios.js';

export default {
	name: 'modify-password',
	data() {
		return  {
			newPassword: '',
			confirmPassword: ''
		}
	},
	methods: {
		updatePassword() {
			if (this.confirmPassword === this.newPassword) {
				return axios.patch('app/account/password', {
					password: this.newPassword
				}).then(() => {
						this.$f7router.back();
					}).catch(err => {
						console.log(err.message);
					});
			}
		}
	}
}
</script>

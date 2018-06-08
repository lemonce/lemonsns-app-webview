<template>

<f7-page name="binding" color-theme="red">
	<f7-navbar title="手机绑定" back-link></f7-navbar>

	<f7-list form class="margin-top">
		<f7-list-item>
			<f7-label>手机</f7-label>
			<f7-input name="phone"
				placeholder="手机号"
				type="text"
				:value="phone"
				@input="phone = $event.target.value">
			</f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>密码</f7-label>
			<f7-input name="password"
				type="password"
				placeholder="密码"
				:value="password"
				@input="password = $event.target.value">
			</f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>确认密码</f7-label>
			<f7-input name="password"
				type="password"
				placeholder="重复密码"
				:value="confirmPassword"
				@input="confirmPassword = $event.target.value">
			</f7-input>
		</f7-list-item>
	</f7-list>

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill tab-link
					@click="signUp">下一步</f7-button>
			</f7-col>
		</f7-row>
	</f7-block>
	
</f7-page>
</template>


<script>
import axios from '../axios.js';

export default {
	name: 'binding',
	data() {
		return {
			phone: '',
			password: '',
			confirmPassword: ''
		}
	},
	methods: {
		signUp() {
			if (this.confirmPassword === this.password) {
				
				return axios.post('app/account', {
					password: this.password,
					ufwd: {
						phone: this.phone,
					}
				}).then(() => {
					this.$f7router.navigate('/info');
				})
			}
		}
	}
}
</script>

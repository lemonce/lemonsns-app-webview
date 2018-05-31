<template>
<f7-page name="personal-info">
	<f7-navbar title="个人信息" back-link></f7-navbar>

	<f7-list form class="margin-top">
		<f7-list-item>
			<f7-label>用户名</f7-label>
			<f7-input name="username"
				type="text"
				:value="account.name"
				@input="account.name = $event.target.value">
			</f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>姓名</f7-label>
			<f7-input name="name"
				type="text"
				:value="account.ufwdAccount.name"
				@input="account.ufwdAccount.name = $event.target.value">
			</f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>性别</f7-label>
			<f7-input name="sex"
				type="text"
				:value="account.ufwdAccount.sex|sex"
				@input="account.ufwdAccount.sex = $event.target.value">
			</f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>手机号</f7-label>
			<f7-input name="phone"
				type="text"
				:value="account.ufwdAccount.phone"
				@input="account.ufwdAccount.phone = $event.target.value">
			</f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>身份证号</f7-label>
			<f7-input name="identification"
				type="text"
				:value="account.ufwdAccount.identification"
				@input="account.ufwdAccount.identification = $event.target.value">
			</f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>党派</f7-label>
			<f7-input name="party"
				type="text"
				:value="account.ufwdAccount.party"
				@input="account.ufwdAccount.party = $event.target.value">
			</f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>街道</f7-label>
			<f7-input name="street"
				type="text"
				:value="account.ufwdAccount.street"
				@input="account.ufwdAccount.street = $event.target.value">
			</f7-input>
		</f7-list-item>
	</f7-list>

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill tab-link
					@click="updateAccount()">确认修改</f7-button>
			</f7-col>
		</f7-row>
	</f7-block>
</f7-page>
</template>

<script>
import axios from '../../../axios.js';

export default {
	name: 'personal-info',
	data() {
		return {
			account: {
				ufwdAccount: {}
			},
		}
	},
	filters: {
		sex(sex) {
			return sex === 'male' ? '男' : '女';
		}
	},
	methods: {
		getAccountInfo() {
			return axios.get(`app/account`)
				.then(res => {

					this.account = res.data.data;
				})
		},
		updateAccount() {
			return axios.put(`app/account/${this.account.id}`, {
				name: this.account.name,
				ufwd: {
					name: this.account.ufwdAccount.name,
					sex: this.account.ufwdAccount.sex,
					phone: this.account.ufwdAccount.phone,
					identification: this.account.ufwdAccount.identification,
					party: this.account.ufwdAccount.party,
					street: this.account.ufwdAccount.street
				}
			}).then(() => {
				this.$f7router.back();
			})
		}
	},
	mounted() {
		console.log(this.accountId)
		this.getAccountInfo();
	}
}
</script>

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
			<f7-label>政治面貌</f7-label>
			<f7-input name="party"
				type="select"
				:value="account.ufwdAccount.party"
				@input="account.ufwdAccount.party = $event.target.value">
				<option v-for="(party, index) in partyList"
					:key="index"
					:value="party.id">{{party.name}}</option>
			</f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>街道</f7-label>
			<f7-input name="street"
				type="select"
				:value="account.ufwdAccount.street"
				@input="account.ufwdAccount.street = $event.target.value">
				<option v-for="(street, index) in streetList"
					:key="index"
					:value="street.id">{{street.name}}</option>
			</f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>工作</f7-label>
			<f7-input name="job"
				placeholder="工作"
				type="text"
				:value="account.ufwdAccount.job"
				@input="account.ufwdAccount.job = $event.target.value">
			</f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>单位</f7-label>
			<f7-input name="unit"
				placeholder="单位"
				type="text"
				:value="account.ufwdAccount.unit"
				@input="account.ufwdAccount.unit = $event.target.value">
			</f7-input>
		</f7-list-item>
		<f7-list-item v-for="(identityElement, index) in identity.identityPool" checkbox
			:value="identityElement.id"
			@change="addCheckedIdentity"
			:key="index" name="identity"
			:title="identityElement.name"
			:checked="identity.checkedIdentity.indexOf(identityElement.id) >= 0"></f7-list-item>
	</f7-list>

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill tab-link
					@click="updateAccount()">确认修改</f7-button>
			</f7-col>
			<f7-col width="100" v-if="fail">
				<f7-button>用户信息修改失败！</f7-button>
			</f7-col>
		</f7-row>
	</f7-block>
</f7-page>
</template>

<script>
import axios from '../axios.js';

export default {
	name: 'personal-info',
	data() {
		return {
			account: {
				ufwdAccount: {}
			},
			partyList: [],
			streetList: [],
			identity: {
				identityPool: [],
				checkedIdentity: [],
				deleteIdentity: [],
				addIdentity: []
			},
			fail: false
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
			return axios.put(`app/account`, {
				name: this.account.name,
				ufwd: {
					name: this.account.ufwdAccount.name,
					sex: this.account.ufwdAccount.sex,
					phone: this.account.ufwdAccount.phone,
					identification: this.account.ufwdAccount.identification,
					party: this.account.ufwdAccount.party,
					street: this.account.ufwdAccount.street,
					job: this.account.ufwdAccount.job,
					unit: this.account.ufwdAccount.unit
				}
			}).then((res) => {
				const id = res.data.data.id;

				axios.post(`app/account/${id}/identity`, {
					identityPool: this.identity.addIdentity
				});

				return id;
			}).then((id) => {
				this.identity.deleteIdentity.forEach(identityId => {
					axios.delete(`/app/identity/${identityId}/account/${id}`);
				});
			}).then(() => {
				this.$store.dispatch('openMessageBox',
					{
						content: '用户信息修改成功！',
						type: '个人信息修改'
					}
				);

				this.$f7router.navigate('/index/');
			}).catch(err => {
				console.log(err.message);
				this.fail = true;
			});
		},
		getPartyList() {
			return axios.get('app/party').then(res => {
				this.partyList = res.data.data;
			});
		},
		getStreetList() {
			return axios.get('app/street').then(res => {
				this.streetList = res.data.data;
			});
		},
		getIdentityList() {
			return axios.get('app/identity').then(res => {
				this.identity.identityPool = res.data.data;
			});
		},
		getOwnIdentityList() {
			return axios.get('app/account/identity').then(res => {
				this.identity.checkedIdentity = res.data.data;
			});
		},
		addCheckedIdentity(event) {
			const checked = event.target.checked;
			const value = event.target.value - 0;
			const checkedList = this.identity.checkedIdentity;
			const addedList = this.identity.addIdentity;
			const deleteList = this.identity.deleteIdentity;

			if (checked && checkedList.indexOf(value) === -1) {
				addedList.push(value);
			} else {
				if (checkedList.indexOf(value) >= 0) {
					deleteList.push(value);
				} else {
					addedList.splice(addedList.indexOf(value), 1)
				}
			}

			console.log(checkedList, addedList, deleteList);
		}
	},
	mounted() {
		this.getAccountInfo();
		this.getPartyList();
		this.getStreetList();
		this.getIdentityList();
		this.getOwnIdentityList();
	}
}
</script>

<template>

<f7-page name="binding" color-theme="red">
	<f7-navbar title="注册" back-link></f7-navbar>

	<f7-list form class="margin-top">
		<f7-list-item>
			<f7-label>用户名</f7-label>
			<f7-input
				placeholder="用户名"
				type="text"
				:value="username"
				@input="username = $event.target.value">
			</f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>密码</f7-label>
			<f7-input name="password"
				type="password"
				placeholder="密码长度不得少于6位"
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
		<f7-list-item>
			<f7-label>姓名</f7-label>
			<f7-input name="name"
				placeholder="姓名"
				type="text"
				:value="ufwd.name"
				@input="ufwd.name = $event.target.value">
			</f7-input>
		</f7-list-item>
		<!-- <f7-list-item>
			<f7-label>性别</f7-label>
    		<f7-input name="sex"
				type="select"
				:value="ufwd.sex"
				@input="ufwd.sex = $event.target.value">
				<option value="female">女</option>
				<option value="male">男</option>
    		</f7-input>
		</f7-list-item> -->
		<f7-list-item>
			<f7-label>手机</f7-label>
			<f7-input name="phone"
				placeholder="手机号"
				type="text"
				:value="ufwd.phone"
				@input="ufwd.phone = $event.target.value">
			</f7-input>
		</f7-list-item>
		<!-- <f7-list-item>
			<f7-label>身份证号</f7-label>
			<f7-input name="identification"
				placeholder="身份证号"
				type="text"
				:value="ufwd.identification"
				@input="ufwd.identification = $event.target.value">
			</f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>政治面貌</f7-label>
			<f7-input name="party"
				type="select"
				:value="ufwd.party"
				@input="ufwd.party = $event.target.value">
				<option v-for="(party, index) in partyList"
					:key="index"
					:value="party.id">{{party.name}}</option>
			</f7-input>
		</f7-list-item> -->
		<f7-list-item>
			<f7-label>街道</f7-label>
			<f7-input name="street"
				type="select"
				:value="ufwd.street"
				@input="ufwd.street = $event.target.value">
				<option v-for="(street, index) in streetList"
					:key="index"
					:value="street.id">{{street.name}}</option>
			</f7-input>
		</f7-list-item>
		<!-- <f7-list-item>
			<f7-label>工作</f7-label>
			<f7-input name="job"
				placeholder="工作"
				type="text"
				:value="ufwd.job"
				@input="ufwd.job = $event.target.value">
			</f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>单位</f7-label>
			<f7-input name="unit"
				placeholder="单位"
				type="text"
				:value="ufwd.unit"
				@input="ufwd.unit = $event.target.value">
			</f7-input>
		</f7-list-item> -->
		<!-- <f7-label>身份类别</f7-label> -->
		<f7-list-item v-for="(identity, index) in identity.identityPool" checkbox
			:value="identity.id"
			@change="addCheckedIdentity"
			:key="index" name="identity"
			:title="identity.name"></f7-list-item>
	</f7-list>

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill tab-link
					@click="signUp">下一步</f7-button>
			</f7-col>
			<f7-col width="100" v-if="fail">
				<f7-button>用户注册失败！</f7-button>
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
			username: null,
			password: null,
			confirmPassword: null,
			ufwd: {
				name: null,
				// sex: 'female',
				phone: null,
				// identification: null,
				// unit: null,
				// job: null,
				// party: 1,
				street: 1,
			},
			partyList: [],
			streetList: [],
			identity: {
				identityPool: [],
				checkedIdentity: []
			},
			fail: false
		}
	},
	methods: {
		signUp() {
			if (!(this.username && this.password && this.ufwd.name && this.ufwd.phone)) {
					return false;
			}

			if (this.confirmPassword === this.password) {
				const ufwd = this.ufwd;

				ufwd.party = parseInt(ufwd.party);
				ufwd.street = parseInt(ufwd.street);

				return axios.post('app/account', {
					name: this.username,
					password: this.password,
					ufwd
				}).then((res) => {
					const id = res.data.data.id;

					axios.post(`app/account/${id}/identity`, {
						identityPool: this.identity.checkedIdentity
					}).catch((err) => {
						console.log(err.message);
					});

				}).then(() => {
					this.$store.dispatch('openMessageBox',
						{
							content: '注册成功，请等待后台审核结果！',
							type: '用户注册'
						}
                	);

                	this.$f7router.navigate('/index/');
				}).catch(() => {
					this.fail = true;
				});
			}
		},
		addCheckedIdentity(event) {
			const value = event.target.value - 0;
			const checkedList = this.identity.checkedIdentity;

			if (event.target.checked) {
				checkedList.push(value);
			} else {
				checkedList.splice(checkedList.indexOf(value), 1);
			}
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
		}
	},
	mounted() {
		this.getPartyList();
		this.getStreetList();
		this.getIdentityList();
	}
}
</script>

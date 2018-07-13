<template>

<f7-page name="card">
	<f7-navbar title="我的名片" back-link></f7-navbar>

	<f7-card>
		<f7-card-header>
			<f7-list media-list>
				<f7-list-item
					:title="account.ufwdAccount.name"
					:subtitle="account.ufwdAccount.sex">
					<f7-icon material="person" slot="media" size="44px"></f7-icon>
				</f7-list-item>
			</f7-list>
		</f7-card-header>
		<f7-card-content>
			<img src="../../../build/qr-code.svg" width="100%"/>
		</f7-card-content>
	</f7-card>
</f7-page>
</template>

<script>
import axios from '../axios.js';
import _ from 'lodash';

export default {
	name: 'personal-info',
	data() {
		return {
			account: {
				ufwdAccount: {}
			},
			partyList: [],
			streetList: [],
			identityPool: [],
			checkedIdentity: [],
			qrCode: {}
		}
	},
	methods: {
		getAccountInfo() {
			return axios.get(`app/account`)
				.then(res => {

					this.account = res.data.data;

					const account = this.account.ufwdAccount;

					const street = this.streetList.find(street => {
						return street.id === account.street;
					});

					const party = this.partyList.find(party => {
						return party.id === account.party;
					});

					account.sex = account.sex === 'male' ? '男' : '女'
					
					account.street = street.name;
					account.party = party.name;

					account.identityList = this.checkedIdentity;

					this.qrCode = JSON.stringify({
						'姓名': account.name,
						'性别': account.sex,
						'电话号码': account.phone,
						'政治面貌': account.party,
						'街道': account.street,
						'工作单位': account.unit,
						'身份类别': account.identityList
					}); 
					
					console.log(this.qrCode);
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
				this.identityPool = res.data.data;
			});
		},
		getOwnIdentityList() {
			return axios.get('app/account/identity').then(res => {
				this.checkedIdentity = res.data.data;

				this.identityPool.forEach((identity) => {
					const index = this.checkedIdentity.indexOf(identity.id);

					if (index !== -1) {
						this.checkedIdentity[index] = identity.name;
					}
				});
			});
		}
	},
	mounted() {
		this.getPartyList().then(() => {
			this.getStreetList();
		}).then(() => {
			this.getIdentityList();
		}).then(() => {
			this.getOwnIdentityList();
		}).then(() => {
			this.getAccountInfo();
		});
	}
}
</script>



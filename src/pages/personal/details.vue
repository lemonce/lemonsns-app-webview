<template>

<f7-page name="card">
	<f7-navbar :title="`${account.name}的名片`" back-link></f7-navbar>

	<f7-card>
		<f7-card-header>
			<f7-list media-list>
				<f7-list-item
					:title="account.name"
					:subtitle="account.sex">
					<f7-icon material="person" slot="media" size="44px"></f7-icon>
				</f7-list-item>
			</f7-list>
		</f7-card-header>
		<f7-card-content>
			<f7-list form class="margin-top">
                <f7-list-item>
                    <f7-label>姓名</f7-label>
                    <f7-input name="name"
                        type="text"
                        disabled
                        :value="account.name">
                    </f7-input>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>性别</f7-label>
                    <f7-input name="sex"
                        type="text"
                        disabled
                        :value="account.sex">
                    </f7-input>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>手机号</f7-label>
                    <f7-input name="phone"
                        type="text"
                        disabled
                        :value="account.phone">
                    </f7-input>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>政治面貌</f7-label>
                    <f7-input name="party"
                        type="select"
                        disabled
                        :value="account.party">
                        <option v-for="(party, index) in partyList"
                            :key="index"
                            :value="party.id">{{party.name}}</option>
                    </f7-input>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>街道</f7-label>
                    <f7-input name="street"
                        type="select"
                        disabled
                        :value="account.street">
                        <option v-for="(street, index) in streetList"
                            :key="index"
                            :value="street.id">{{street.name}}</option>
                    </f7-input>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>工作</f7-label>
                    <f7-input name="job"
                        type="text"
                        disabled
                        :value="account.job">
                    </f7-input>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>单位</f7-label>
                    <f7-input name="unit"
                        type="text"
                        disabled
                        :value="account.unit">
                    </f7-input>
                </f7-list-item>
                <f7-list-item v-for="(identityElement, index) in identityList" checkbox
                    disabled
                    :value="identityElement.id"
                    :key="index" name="identity"
                    :title="identityElement.name"
                    :checked="account.identityList.indexOf(identityElement.id) >= 0"
                    ></f7-list-item>
            </f7-list>
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
                identityList: []
            },
			partyList: [],
			streetList: [],
			identityList: []
		}
	},
	methods: {
		getAccountInfo() {
			return axios.get(`app/vip?accountId=${this.accountId}`)
				.then(res => {

					this.account = res.data.data;

                    this.account.sex = this.account.sex === 'male' ? '男' : '女'
                    console.log(this.account.identityList);
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
				this.identityList = res.data.data;
			});
		}
	},
	mounted() {
        this.accountId = this.$f7route.params.id;

        this.getPartyList();
        this.getStreetList();
        this.getIdentityList();
        this.getAccountInfo();
	}
}
</script>
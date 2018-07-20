<template>
    <f7-page>
        <f7-navbar title="群英汇" back-link></f7-navbar>
        <f7-searchbar
            disable-link-text="取消搜索"
            search-container="#search-list"
            :backdrop="false"
            :customSearch="true"
            placeholder="输入您要查找的统战人士姓名"
            :clear="true"
            @searchbar:search="onSearch"
        >
        </f7-searchbar>
        <f7-list v-if="!isSearch">
            <f7-list-item>
                <f7-label>政治面貌</f7-label>
                <f7-input name="party"
                    type="select"
                    :value="party"
                    @input="party = $event.target.value">
                    <option value="0">未选择</option>
                    <option v-for="(party, index) in partyList"
                        :key="index"
                        :value="party.id">{{party.name}}</option>
                </f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>街道</f7-label>
                <f7-input name="street"
                    type="select"
                    :value="street"
                    @input="street = $event.target.value">
                    <option value="0">未选择</option>
                    <option v-for="(street, index) in streetList"
                        :key="index"
                        :value="street.id">{{street.name}}</option>
                </f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>身份类别</f7-label>
                <f7-input name="identity"
                    type="select"
                    :value="identity"
                    @input="identity = $event.target.value">
                    <option value="0">未选择</option>
                    <option v-for="(identity, index) in identityList"
                        :key="index"
                        :value="identity.id">{{identity.name}}</option>
                </f7-input>
            </f7-list-item>
        </f7-list>
        <f7-list class="searchbar-not-found">
            <f7-list-item title="无匹配条件的人员"></f7-list-item>
        </f7-list>
        <f7-list class="searchbar-found" id="search-list" v-if="isSearch">
            <f7-list-item v-if="text !== ''">{{text}}</f7-list-item>
            <f7-list-item v-if="hasUser" v-for="(user, index) in userList" :key="index" :title="`${user.name} ${user.phone}`"
                :link="`/account/${user.accountId}/details`"></f7-list-item>
            <f7-list-item v-if="!hasUser" title="无合适的结果!"></f7-list-item>
        </f7-list>
    </f7-page>
</template>

<script>
import axios from '../axios.js';

export default {
    name: 'group',
    data() {
        return {
            userList: [],
            userShown: null,
            partyList: null,
            streetList: null,
            identityList: null,
            party: 0,
            street: 0,
            identity: 0,
            text: '',
            isSearch: false
        };
    },
    computed: {
        hasUser() {
            return this.userList.length !== 0;
        }
    },
    methods: {
        onSearch(searchbar, query) {
            this.text = `查找姓名为：${query}`;

            let queryString = `keyword=${query}`;

            if (this.party !== 0 && this.party !== '0') {
                queryString += `&party=${this.party}`;

                this.partyList.forEach(item => {
                    
                    if (item.id == this.party) {
                         this.text = this.text + ` 政治面貌为：${item.name}`;
                    }
                });
            }

            if (this.street !== 0 && this.street !== '0') {
                queryString += `&street=${this.street}`;

                this.streetList.forEach(item => {
                    if (item.id == this.street) {
                         this.text = this.text + ` 街道为：${item.name}`;
                    }
                });
            }

            if (this.identity !== 0 && this.identity !== '0') {
                queryString += `&identity=${this.identity}`;

                this.identityList.forEach(item => {
                    if (item.id == this.identity) {
                         this.text = this.text + ` 身份类别为：${item.name}`;
                    }
                });

            }

            if (query === '') {

                this.isSearch = false;
                this.text = '';
                this.userList = [];

                return;
            }

            this.text = this.text + ` 的统战人士搜索结果如下：`;

            return axios.get(`app/vip?${queryString}`).then(res => {
                this.userList = res.data.data;
                this.isSearch = true;
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
		},
    },
    mounted() {
        this.getPartyList();
        this.getStreetList();
        this.getIdentityList();
    }
}
</script>

<style>
.md .searchbar input[type=search], .md .searchbar input[type=text] {
    font-size: 16px;
}
.md .searchbar-backdrop {
    background: rgba(255, 255, 255, 0.25);
}
</style>



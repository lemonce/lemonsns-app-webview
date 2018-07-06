<template>
    <f7-page>
        <f7-navbar title="群英汇" back-link></f7-navbar>
        <f7-searchbar
            disable-link-text="取消搜索"
            search-container="#search-list"
            :customSearch="true"
            placeholder="请输入搜索人的姓名或工作单位"
            :clear="true"
            @searchbar:search="onSearch"
            @searchbar:disable="onDisable"
        ></f7-searchbar>
        <f7-list class="searchbar-not-found">
            <f7-list-item title="无匹配条件的人员"></f7-list-item>
        </f7-list>
        <f7-list class="searchbar-found" id="search-list" v-if="hasUser">
            <f7-list-item v-for="(user, index) in userList" :key="index" :title="`${user.name} ${user.phone}`"></f7-list-item>
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
            items: [],
            hasUser: false
        };
    },
    methods: {
        onSearch(searchbar, query, previousQuery) {
            
            return axios.get(`app/vip`).then(res => {
                this.hasUser = true;
				this.userList = res.data.data;
			});
        },
        onEnable() {
            
        },
        onDisable() {

        }
    }
}
</script>


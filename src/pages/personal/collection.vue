<template>

<f7-page name="collection">
	<f7-navbar title="收藏" back-link></f7-navbar>

	<f7-searchbar
		disable-link-text="取消"
		search-container="#search-list"
		placeholder="在收藏中搜索..."
		:clear-button="true"
		@searchbar:search="onSearch()"
		@searchbar:enable="onEnable()"
		@searchbar:disable="onDisable()"
		@searchbar:clear="onClear()"
    ></f7-searchbar>

    <!-- Will be visible if there is no any results found, defined by "searchbar-not-found" class -->
    <f7-list class="searchbar-not-found margin-top">
      <f7-list-item title="很抱歉，没有结果"></f7-list-item>
    </f7-list>

    <!-- Search through this list -->
    <f7-list class="searchbar-found margin-top" media-list id="search-list">
      <f7-list-item
	  	v-for="(item, index) in items"
		:key="index"
		:herf="item.link"
		:title="item.title"
		:text="item.text"></f7-list-item>
    </f7-list>
</f7-page>
</template>

<script>
import axios from '../axios.js';

export default {
	name: 'collection',
	data() {
		return {
			items: [
				{
					title: '学习十九大精神',
					text: '微课堂',
					link: '/index/'
				},
				{
					title: '学习统战知识',
					text: '知识学习'
				},
				{
					title: '西青区特色文化艺术',
					text: '艺术长廊'
				},
			]
		};
	},
	methods: {
		onSearch(searchbar, query, previousQuery) {
			console.log("search", query);
		},
		onClear(event) {
			console.log("clear");
		},
		onEnable(event) {
			console.log("enable");
		},
		onDisable(event) {
			console.log("disable");
		},
		getCollection() {
			return axios.get(`app/article?like=true`).then(res => {
				this.items = res.data.data;
			});
		}
	}
};
</script>
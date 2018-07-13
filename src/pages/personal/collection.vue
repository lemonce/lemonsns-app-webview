<template>

<f7-page name="collection">
	<f7-navbar title="收藏" back-link></f7-navbar>

	<f7-searchbar
		disable-link-text="取消"
		search-container="#search-list"
		placeholder="在收藏中搜索..."
		:clear-button="true"
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
		:link="item.link"
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
			items: null
		};
	},
	mounted() {
		this.getCollection();
	},
	methods: {
		getCollection() {
			return axios.get(`app/article?like=true`).then(res => {
				this.items = res.data.data;

				this.items.forEach(item => {
					item.link = `/article/${item.id}`;
				})
			});
		}
	}
};
</script>
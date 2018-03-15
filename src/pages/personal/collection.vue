<template>

<f7-page name="collection">
	<f7-navbar title="Collections" back-link></f7-navbar>

	<f7-searchbar
		disable-link-text="Cancel"
		search-container="#search-list"
		placeholder="Search in colections"
		:clear-button="true"
		@searchbar:search="onSearch()"
		@searchbar:enable="onEnable()"
		@searchbar:disable="onDisable()"
		@searchbar:clear="onClear()"
    ></f7-searchbar>

    <!-- Will be visible if there is no any results found, defined by "searchbar-not-found" class -->
    <f7-list class="searchbar-not-found margin-top">
      <f7-list-item title="Nothing found"></f7-list-item>
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
export default {
	name: 'collection',
	data() {
		return {
			items: [
				{
					title: 'item 1',
					text: 'item-1',
					link: '/index'
				},
				{
					title: 'item 2',
					text: 'item-2'
				},
				{
					title: 'item 3',
					text: 'item-3'
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
		}
	}
};
</script>
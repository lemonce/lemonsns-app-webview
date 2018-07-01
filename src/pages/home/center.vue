<template>

<f7-page name="center">
	<f7-navbar :title="centerName" back-link></f7-navbar>

	<f7-toolbar>
		<f7-link
			v-for="(category, index) in categoryList"
			class="tab-link"
			:class="{
				'tab-link-active': categoryActivedIndex === index
			}"
			:key="index"
			@click="activeTab(index)">{{category.name}}</f7-link> 
	</f7-toolbar>
	<!--scrollable的highlight显示正常，但是没有scrollable的tabbar样式显示不正常，决定去掉tabbar，然后改tab-link和tab-link-active的样式  -->
	<f7-swiper style="min-height:100%"
		ref="list"
		:params="{
			observer: true,
			on: { slideChange: updateActive }
		}"
		id="swiper-container">
		<f7-swiper-slide
			v-for="(category, index) in categoryList"
			:key="index">
			<article-list :categoryId="category.id"></article-list>
		</f7-swiper-slide>
	</f7-swiper>
</f7-page>
</template>

<script>
import ArticleList from './article-list';
import axios from '../axios.js';

const center = {
	culture: '文化艺术',
	knowledge: '微课堂'
};


export default {
	name: 'center',
	components: {
		ArticleList
	},
	data() {
		return {
			centerTitle: '',
			categoryList: [],
			categoryActivedIndex: 0
		}
	},
	computed: {
		centerName() {
			this.centerTitle = this.$f7route.params.name;

			if (center[this.centerTitle]) {
				return center[this.centerTitle];
			}

			return this.centerTitle;
		}
	},
	methods: {
		getCategoryList() {
			return axios.get(`app/category`, {
				params: {
					symbol: this.centerName
				}
			}).then(res => this.categoryList = res.data.data);
		},
		updateActive() {
			this.categoryActivedIndex = this.$refs.list.swiper.activeIndex;
		},
		activeTab(index) {
			this.$refs.list.swiper.slideTo(index);
		}
	},
	mounted() {
		this.getCategoryList();
	}
}
</script>

<style>
.md a.tab-link.tab-link-active {
    color: #fff;
}
.md a.tab-link {
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    overflow: hidden;
    color: rgba(255,255,255,.7);
    position: relative;
}
</style>


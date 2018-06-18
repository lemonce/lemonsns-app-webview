<template>

<f7-page name="center">
	<f7-navbar :title="centerName" back-link></f7-navbar>

	<!-- <img src="../../images/home/slide4.jpg" width="100%"> -->
	
	<!-- <f7-list>
		<f7-list-item
			v-for="(category, index) in categoryList"
			:key="index"
			:link="`/article-list/${category.id}`"
			:title="category.name">

		</f7-list-item>
	</f7-list> -->

	<f7-toolbar>
		<f7-link
			v-for="(category, index) in categoryList"
			:class="{'tab-link-active': categoryActive === index , 'tab-link': true}"
			:key="index"
			@click="activeTab(index)">{{category.name}}</f7-link> 
	</f7-toolbar>
	<!--scrollable的highlight显示正常，但是没有scrollable的tabbar样式显示不正常，决定去掉tabbar，然后改tab-link和tab-link-active的样式  -->
	<f7-swiper style="height:100%"  :params="{ observer: true }">
		<f7-swiper-slide
			@touch="changeSwiper()"
			v-for="(category, index) in categoryList"
			:key="index">
			<article-list :categoryId="category.id"></article-list>
		</f7-swiper-slide>
	</f7-swiper>
</f7-page>
</template>

<script>
import TabTest from './tab-test.vue';
import ArticleList from './article-list';
import axios from '../axios.js';

const center = {
	news: '新闻中心',
	culture: '文化艺术',
	personnel: '人才中心',
	courseSpirit: '中央市委区委主要会议文件精神',
	courseUFWD: '学习统战知识'
};

const $$ = Dom7;

export default {
	name: 'center',
	components: {
		TabTest,
		ArticleList
	},
	data() {
		return {
			centerTitle: '',
			categoryList: [],
			categoryActive: 0
		}
	},
	computed: {
		centerName() {
			this.centerTitle = this.$f7route.params.name;
			return center[this.centerTitle];
		}
	},
	methods: {
		getCategoryList() {
			return axios.get(`app/category?symbol=${this.centerName}`)
				.then(res => {
					
					this.categoryList = res.data.data;
				});
		},
		activeTab(index, id) {
			if (index === this.categoryActive) {
				return;
			}

			$$('a.tab-link-active').removeClass('tab-link-active');

			this.categoryActive = index;
		},
		changeSwiper(el) {
			console.log(el.target);
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


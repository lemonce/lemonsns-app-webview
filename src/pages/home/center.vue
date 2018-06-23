<template>

<f7-page name="center">
	<f7-navbar :title="centerName" back-link></f7-navbar>

	<f7-toolbar>
		<f7-link
			v-for="(category, index) in categoryList"
			:class="{'tab-link-active': categoryActive === index , 'tab-link': true}"
			:key="index"
			@click="activeTab(index)">{{category.name}}</f7-link> 
	</f7-toolbar>
	<!--scrollable的highlight显示正常，但是没有scrollable的tabbar样式显示不正常，决定去掉tabbar，然后改tab-link和tab-link-active的样式  -->
	<f7-swiper style="height:100%"  :params="{ observer: true }" id="swiper-container">
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
	knowledge: '学习统战知识'
};

const $$ = Dom7;

let timer = null;

export default {
	name: 'center',
	components: {
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

			if (center[this.centerTitle]) {
				return center[this.centerTitle];
			}

			return this.centerTitle;
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

			const swiper = this.$f7.swiper.get('#swiper-container');

			swiper.activeIndex = index;

			this.categoryActive = index;
		}
	},
	mounted() {
		this.getCategoryList();

		timer = setInterval(() => {
			const swiper = this.$f7.swiper.get('#swiper-container');
			const length = swiper.slides.length;

			for (let i = 0; i < length; i ++) {

				if ($$(swiper.slides[i]).hasClass('swiper-slide-active')) {
					this.categoryActive = i;
				}
			}

		}, 500);
	},
	destroyed() {
		clearInterval(timer);
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


<template>
	
<!-- <f7-page name="article-list">
	<f7-navbar title="文章列表" back-link></f7-navbar>

	<f7-list media-list>
		<f7-list-item
			v-for="(article, index) in articleList"
			:key="index"
			:title="article.title"
			:text="article.abstract"
			:link="`/article/${article.id}`">
			<div slot="media">
				<img :src="thumbnailSrc(article.thumbnail, 'small')" style="width:6rem;" v-if="!article.isShow">
				<img src="../../images/replacement.png" style="width:6rem;" v-if="article.isShow">
			</div>
		</f7-list-item>
	</f7-list>
</f7-page> -->
<f7-list media-list>
	<f7-list-item
		v-if="hasArticle"
		v-for="(article, index) in articleList"
		:key="index"
		:title="article.title"
		:text="article.abstract"
		:link="`/article/${article.id}`">
		<div slot="media">
			<img :src="thumbnailSrc(article.thumbnail, 'small')" style="width:6rem;" v-if="!article.isShow">
			<img src="../../images/replacement.png" style="width:6rem;" v-if="article.isShow">
		</div>
		<div slot="root"
			@touchmove="isSwiping=true"
			@touchend="clickWithoutSwipe($event)"
			class="mask"></div>
	</f7-list-item>
	<f7-block-title v-if="!hasArticle">该分类没有文章!!</f7-block-title>
</f7-list>
</template>

<script>
import axios from '../axios.js';
import config from '../../../config.json';

export default {
	name: 'article-list',
	data() {
		return {
			isSwiping: false,
			articleList: [],
			hasArticle: true
		}
	},
	props: ['categoryId'],
	computed: {
		articleList() {
			return this.getArticleList();
		}
	},
	methods: {
		clickWithoutSwipe(event) {
			if (!this.isSwiping) {
				event.target.parentElement.querySelector('a').click();
			}
			
			this.isSwiping = false;
		},
		getArticleList() {
			return axios.get(`app/category/${this.categoryId}/article`)
				.then(res => {
					const articleData = res.data.data;

					if (articleData.length === 0) {
						this.hasArticle = false;
					}

					articleData.forEach(article => {
						article.isShow = false;
						
						if (!article.thumbnail) {
							article.isShow = true;
						}

						this.articleList.push(article);
					});
				})
		},
		thumbnailSrc(hash, regular) {

			return `${config.static}thumbnail/${hash}/regular/${regular}`;
		}
	},
	mounted() {
		this.getArticleList();
	}
}
</script>

<style lang="less">
.mask {
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 10;
	top: 0;
	left: 0;
}
</style>


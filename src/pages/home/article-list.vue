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
</template>

<script>
import axios from '../axios.js';
import config from '../../../config.json';

export default {
	name: 'article-list',
	data() {
		return {
			articleList: []
		}
	},
	props: ['categoryId'],
	computed: {
		articleList() {
			return this.getArticleList();
		}
	},
	methods: {
		getArticleList() {
			return axios.get(`app/category/${this.categoryId}/article`)
				.then(res => {
					const articleData = res.data.data;

					articleData.forEach(article => {
						article.ufwdArticle.isShow = false;
						
						if (!article.ufwdArticle.thumbnail) {
							article.ufwdArticle.isShow = true;
						}

						this.articleList.push(article.ufwdArticle);
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

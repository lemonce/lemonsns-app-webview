<template>
	
<f7-page name="article-list">
	<f7-navbar :title="categoryName" back-link></f7-navbar>

	<f7-list media-list>
		<f7-list-item
			v-for="(article, index) in articleList"
			:key="index"
			:title="article.title"
			:text="article.abstract"
			:link="`/article/${article.id}`">
			<div slot="media">
				<img :src="thumbnailSrc(article.thumbnail, 'small')" style="width:6rem;">
			</div>
		</f7-list-item>
	</f7-list>
</f7-page>
</template>

<script>
import axios from '../../../axios.js';

export default {
	name: 'article-list',
	data() {
		return {
			articleList: []
		}
	},
	computed: {
		categoryId() {
			return this.$f7route.params.id;
		}
	},
	methods: {
		getArticleList() {
			return axios.get(`app/category/${this.categoryId}/article`)
				.then(res => {
					console.log(res.data.data)
				})
		}
	},
	mounted() {
		this.getArticleList();
	}
}
</script>

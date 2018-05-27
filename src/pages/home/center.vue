<template>

<f7-page name="center">
	<f7-navbar :title="centerName" back-link></f7-navbar>

	<!-- <img src="../../images/home/slide4.jpg" width="100%"> -->
	
	<f7-list>
		<f7-list-item
			v-for="(category, index) in categoryList"
			:key="index"
			:link="`/article-list/${category.id}`"
			:title="category.name">

		</f7-list-item>
	</f7-list>
	
</f7-page>
</template>

<script>
import TabTest from './tab-test.vue';
import axios from '../../../axios.js';

const center = {
	news: '新闻中心',
	culture: '文化艺术',
	personnel: '人才中心',
	courseSpirit: '中央市委区委主要会议文件精神',
	courseUFWD: '学习统战知识',
	mailbox: '投递中心'
}
export default {
	name: 'center',
	components: {
		TabTest
	},
	data() {
		return {
			centerTitle: '',
			categoryList: []
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
				})
		}
	},
	mounted() {
		this.getCategoryList();
	}
}
</script>

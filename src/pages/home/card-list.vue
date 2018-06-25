<template>
<f7-page>
	<f7-navbar :title="centerName" back-link></f7-navbar>
	<f7-card>
		<f7-card-content>
			<f7-list media-list>
				<f7-list-item v-for="(category, index) in categoryList" :key="index"
					:link="`/center/${category.name}/article`">
					<div slot="media" style="position: relative">
						<img :src="thumbnailSrc(category.thumbnail, 'small')" style="width:10rem" v-if="!category.isShow">
						<img src="../../images/replacement.png" style="width:10rem;" v-if="category.isShow">
						<span class="cover">
							<span>{{category.name}}</span>
						</span>
					</div>
					<div slot="inner">
						<f7-block v-for="(item, index) in category.categoryList" :key="index">{{item}}</f7-block>
					</div>
				</f7-list-item>
			</f7-list>	
		</f7-card-content>
	</f7-card>
</f7-page>
</template>

<script>
import config from '../../../config.json';
import axios from '../axios.js';

const center = {
	news: '闻资讯',
	culture: '文化站',
	knowledge: '微课堂'
};

export default {
	name: 'card-list',
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
			return axios.get(`app/category/levelTwo?item=${this.centerName}`)
				.then(res => {
					
					this.categoryList = res.data.data;

					this.categoryList.forEach(category => {
						category.isShow = false;

						if (!category.thumbnail) {
							category.isShow = true;
						}
					});
				});
		},
		thumbnailSrc(hash, regular) {
			return `${config.static}thumbnail/${hash}/regular/${regular}`;
		}
	},
	mounted() {
		this.getCategoryList();
	}
}
</script>

<style>
.cover {
	position: absolute;
	left: 0;
	top: 0;
	display: block;
	width: 100%;
	height: 100%;
	background:rgba(0,0,0,0.3);
	text-align: center;
	line-height: 7rem;
	color: white
}
</style>



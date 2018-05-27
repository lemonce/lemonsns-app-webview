<template>

<div>
	<f7-swiper pagination :params="{ spaceBetween: 50}" class="home-swiper">
		<f7-swiper-slide>
			<img src="../../images/home/slide1.jpg" alt="" width="100%">
		</f7-swiper-slide>
		<f7-swiper-slide>
			<img src="../../images/home/slide2.jpg" alt="" width="100%">
		</f7-swiper-slide>
		<f7-swiper-slide>
			<img src="../../images/home/slide3.jpg" alt="" width="100%">
		</f7-swiper-slide>
		<f7-swiper-slide>
			<img src="../../images/home/slide4.jpg" alt="" width="100%">
		</f7-swiper-slide>
		<f7-swiper-slide>
			<img src="../../images/home/slide5.jpg" alt="" width="100%">
		</f7-swiper-slide>
	</f7-swiper>

	<div id="home-item-pool" class="">
		<f7-row no-gap>
			<f7-col class="padding-top">
				<f7-icon material="description" color="blue"></f7-icon><br>
				<f7-link
					text="闻资讯"
					href="/center/news"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col class="padding-top">
				<f7-icon material="business" color="green"></f7-icon><br>
				<f7-link
					text="文化站"
					href="/center/culture"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col class="padding-top">
				<f7-icon material="chat_bubble_outline" color="orange"></f7-icon><br>
				<f7-link
					text="通知栏"
					href="/activity"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col class="padding-top">
				<f7-icon material="border_color" color="red"></f7-icon><br>
				<f7-link
					text="签到处"
					href="/"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
		</f7-row>
		<f7-row no-gap>
			<f7-col class="padding-top">
				<f7-icon material="people" color="yellow"></f7-icon><br>
				<f7-link
					text="群英汇"
					href="/center/personnel"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col class="padding-top">
				<f7-icon material="live_tv" color="gray"></f7-icon><br>
				<f7-link
					text="微课堂"
					href="/knowledge"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col class="padding-top">
				<f7-icon material="playlist_add_check" color="black"></f7-icon><br>
				<f7-link
					text="填填看"
					href="/vote-index"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col class="padding-top">
				<f7-icon material="drafts" color="pink"></f7-icon><br>
				<f7-link
					text="投递箱"
					href="/center/mailbox"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
		</f7-row>
	</div>

	<f7-block-title class="margin-bottom">新闻中心</f7-block-title>
	<f7-list media-list>
		<f7-list-item
			v-for="(article, index) in articleList"
			:key="index"
			:title="article.title"
			:text="article.abstract"
			:link="`/article/${article.id}`">
			<div slot="media">
				<img :src="thumbnailSrc(article.thumbnail, 'small')" style="width:6rem">
			</div>
		</f7-list-item>
	</f7-list>

	<f7-block-title>文化中心</f7-block-title>
	<f7-list media-list>
		<f7-list-item
			title="统战大走访 | 民进西青工委走访慰问退休会员"
			text="按照西青区委统战部工作部署以及开展“大调研大走访”活动的要求，日前，民进西青工委有关负责同志带队对部分退休老会员进行走访慰问。"
			link="/article">
			<div slot="media">
				<img src="../../images/home/slide3.jpg" style="width:6rem">
			</div>	
		</f7-list-item>
	</f7-list>

</div>
</template>

<script>
import axios from '../../../axios.js';

export default {
	name: 'home',
	data() {
		return {
			articleList: []
		};
	},
	mounted() {
		this.getArticleList();
	},
	methods: {
		getArticleList() {
			return axios.get(`app/article`).then(res => {
				const articleList = res.data.data;

				articleList.forEach(article => {

					if (article.thumbnail) {
						this.articleList.push(article);
					}

				});
			}).catch(err => {
				console.log(err.message);
			});
		},

		thumbnailSrc(hash, regular) {
			return `http://120.27.113.195:8000/static/ufwd/thumbnail/${hash}/regular/${regular}`;
		}
	}
	
}
</script>


<style lang="less">
.home-swiper {
	height: 12rem;

}
#home-item-pool {
	div.col {
		background: #fff;
		text-align: center;
		border: 1px solid #ddd;
	}
}
</style>

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
		<!-- <f7-swiper-slide  v-for="(url, index) in urlList" :key="index">
			<img :src="url" alt="" width="100%">
		</f7-swiper-slide> -->
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
					href="/center/culture/article"
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
					href="/"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col class="padding-top">
				<f7-icon material="live_tv" color="gray"></f7-icon><br>
				<f7-link
					text="微课堂"
					href="/center/knowledge/article"
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
					href="/mailbox"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
		</f7-row>
	</div>

	<f7-block-title class="margin-bottom">新闻中心</f7-block-title>
	<f7-list media-list>
		<f7-list-item
			v-for="(article, index) in newsList"
			:key="index"
			:title="article.title"
			:text="article.abstract"
			:link="`/article/${article.id}`">
			<div slot="media">
				<img :src="thumbnailSrc(article.thumbnail, 'small')" style="width:6rem">
			</div>
		</f7-list-item>
	</f7-list>

	<f7-block-title>文化艺术</f7-block-title>
	<f7-list media-list>
		<f7-list-item
			v-for="(article, index) in cultureList"
			:key="index"
			:title="article.title"
			:text="article.abstract"
			:link="`/article/${article.id}`">
			<div slot="media">
				<img :src="thumbnailSrc(article.thumbnail, 'small')" style="width:6rem">
			</div>
		</f7-list-item>
	</f7-list>

	<f7-block-title>人才中心</f7-block-title>
	<f7-list media-list>
		<f7-list-item
			v-for="(article, index) in personnelList"
			:key="index"
			:title="article.title"
			:text="article.abstract"
			:link="`/article/${article.id}`">
			<div slot="media">
				<img :src="thumbnailSrc(article.thumbnail, 'small')" style="width:6rem">
			</div>
		</f7-list-item>
	</f7-list>

	<div class="report">
  <f7-block-title align='center'>违法和不良信息举报</f7-block-title>
  <img src="http://www.xq.net.cn/index.files/sydb1.jpg">
  <p>违法和不良信息举报电话：022-27919129</p>
  <p>举报邮箱：xqxxg2017@163.com</p>
	</div>

	<!-- <f7-block-title>投递中心</f7-block-title>
	<f7-list media-list>
		<f7-list-item
			v-for="(article, index) in mailboxList"
			:key="index"
			:title="article.title"
			:text="article.abstract"
			:link="`/article/${article.id}`">
			<div slot="media">
				<img :src="thumbnailSrc(article.thumbnail, 'small')" style="width:6rem">
			</div>
		</f7-list-item>
	</f7-list> -->

</div>
</template>

<script>
import axios from '../axios.js';
import config from '../../../config.json';

export default {
	name: 'home',
	data() {
		return {
			newsList: [],
			cultureList: [],
			personnelList: [],
			mailboxList:[],
			urlList: []
		};
	},
	mounted() {
		this.getArticleList();
		this.getSlideList();
	},
	methods: {
		getNewsList() {
			return axios.get(`app/symbol/article?value=新闻中心`).then(res => {
				const articleList = res.data.data;

				articleList.forEach(article => {

					if (article.ufwdArticle.thumbnail) {
						this.newsList.push(article.ufwdArticle);
					}

				});
			}).catch(err => {
				console.log(err.message);
			});
		},
		getCultureList() {
			return axios.get(`app/symbol/article?value=文化艺术`).then(res => {
				const articleList = res.data.data;

				articleList.forEach(article => {

					if (article.ufwdArticle.thumbnail) {
						this.cultureList.push(article.ufwdArticle);
					}

				});
			}).catch(err => {
				console.log(err.message);
			});
		},
		getPersonnelList() {
			return axios.get(`app/symbol/article?value=人才中心`).then(res => {
				const articleList = res.data.data;

				articleList.forEach(article => {

					if (article.ufwdArticle.thumbnail) {
						this.personnelList.push(article.ufwdArticle);
					}

				});
			}).catch(err => {
				console.log(err.message);
			});
		},
		getMailboxList() {
			return axios.get(`app/symbol/article?value=投递中心`).then(res => {
				const articleList = res.data.data;

				articleList.forEach(article => {

					if (article.ufwdArticle.thumbnail) {
						this.mailboxList.push(article.ufwdArticle);
					}

				});
			}).catch(err => {
				console.log(err.message);
			});
		},
		getArticleList() {
			this.getNewsList();
			this.getCultureList();
			this.getPersonnelList();
			this.getMailboxList();
		},

		thumbnailSrc(hash, regular) {
			return `${config.static}thumbnail/${hash}/regular/${regular}`;
		},
		getSlideList() {
			return axios.get(`app/thumbnail`).then(res => {
				this.urlList = res.data.data;
			});
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
.report {
	p {
		text-align: center;
	}
	img {
		margin-left: auto;
		margin-right: auto;
		display: block;
	}
}
</style>

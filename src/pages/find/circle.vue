<template>

<f7-page name="circle" infinite @infinite="onInfiniteScroll">
	<f7-navbar :title="title" back-link></f7-navbar>

	<!-- <f7-card>
		<f7-card-header>
			<f7-list media-list>
				<f7-list-item
					title="张三"
					subtitle="1分钟前">
				</f7-list-item>
			</f7-list>
		</f7-card-header>
		<f7-card-content>
			<img src="../../images/home/slide1.jpg" width="100%">
			<f7-list media-list>
				<f7-list-item
					title="统战知识 | 抗日民族统一战线：抗日战争胜利的根本保证"
					text="中国抗日战争，是中国近代以来抗击外敌入侵第一次取得完全胜利的伟大民族解放战争，也是世界反法西斯战争的重要组成部分。而抗日战争最终取得完全胜利与中国共产党所倡导建立的以国共合作为基础的抗日民族统一战线是密不可分的。"
					link="/article">
				</f7-list-item>
			</f7-list>
		</f7-card-content>
		<f7-card-footer>
			<f7-link icon-f7="heart_fill" text="1"></f7-link>
			<f7-link icon-f7="star"></f7-link>
			<f7-link icon-f7="forward"></f7-link>
		</f7-card-footer>
	</f7-card>
	
	<f7-card>
		<f7-card-header>
			<f7-list media-list>
				<f7-list-item
					title="王权有"
					subtitle="两小时前">
				</f7-list-item>
			</f7-list>
		</f7-card-header>
		<f7-card-content>
			<img src="../../images/home/slide2.jpg" width="100%">
			<f7-list media-list>
				<f7-list-item
					title="港澳台海 | 西青区委常委、统战部长董秀琴会见"
					text="为进一步加大对台招商服务力度，促进重点台资项目发展，4月2日，区委常委、区委统战部部长董秀琴会见了台湾冠德集团董事长马志纲一行。董秀琴与马志纲一行进行了亲切的交流，详细了解了冠德环球购物中心的运营情况，听取了企业未来的发展规划和目标，对企业扎根西青、服务天津的发展理念和稳步提升的经营业绩表示了肯定。"
					link="/article">
				</f7-list-item>
			</f7-list>
		</f7-card-content>
		<f7-card-footer>
			<f7-link icon-f7="heart"></f7-link>
			<f7-link icon-f7="star"></f7-link>
			<f7-link icon-f7="forward"></f7-link>
		</f7-card-footer>
	</f7-card> -->
	<f7-card v-for="(article, index) in articleList" :key="index" v-if="hasArticle">
		<f7-card-header>
			<f7-list media-list>
				<f7-list-item
					:title="article.channel.name"
					:subtitle="article.updated_at">
				</f7-list-item>
			</f7-list>
		</f7-card-header>
		<f7-card-content>
			<img :src="thumbnailSrc(article.thumbnail, 'small')" width="100%" v-if="!article.isShow">
			<img src="../../images/replacement.png" width="100%" v-if="article.isShow">
			<f7-list media-list>
				<f7-list-item
					:title="article.title"
					:text="article.abstract"
					:link="`/article/${article.id}`">
				</f7-list-item>
			</f7-list>
		</f7-card-content>
		<!-- <f7-card-footer>
			<f7-link
				:icon-f7="favoriteTag"
				@click="favorite"
				ref="like">
			</f7-link>
			<f7-link
				:icon-f7="collectTag"
				@click="collect"
				ref="collect">
			</f7-link>
			<f7-link icon-f7="forward"></f7-link>
		</f7-card-footer> -->
	</f7-card>
	<f7-block-title v-if="!hasArticle">没有新文章</f7-block-title>
</f7-page>
</template>

<script>
import axios from '../axios.js';
import config from '../../../config.json';
import dateFormat from 'dateformat';

export default {
	name: 'circle',
	data() {
		return {
			title: '',
			street: 0,
			channelList: [],
			articleList: [],
			query: '',
			hasArticle: true,
			loadSwitch: true,
			offset: 0
		}
	},
	methods: {
		getSubscribe() {
			return axios.get(`app/account/channel`).then(res => {
				this.subscribe = res.data.data;
			});
		},
		getChannelList() {
			return axios.get(`app/channel`).then(res => {
				const channelList = res.data.data;

				this.channelList = channelList.map(channel => {
					channel.isFollow = false;

					this.subscribe.forEach(item => {
						if (item.channelId === channel.id) {
							channel.isFollow = true;
						}
					});

					return {
						id: channel.id,
						name: channel.name,
						isFollow: channel.isFollow
					}
				});
			});
		},
		getArticleList({limit = 3, offset}) {
			const url = offset
			? this.getUrl()+`?limit=${limit}&offset=${offset}`
			: this.getUrl()+`?limit=${limit}`;

			return axios.get(`${url}`).then(res => {
				const articleList = res.data.data;

				articleList.forEach(article => {
					article.isShow = false;

					article.updated_at = dateFormat(article.updated_at, 'yyyy/mm/dd HH:MM');
						
					if (!article.thumbnail) {
						article.isShow = true;
					}

					this.channelList.forEach(channel => {
						if (channel.id === article.channel) {
							article.channel = channel;
						}
					})
				});

				if (articleList.length === 0) {
					if (!offset) {
						this.hasArticle = false;
					} else {
						setTimeout(() => {
							this.loadSwitch = true;
						}, 60 * 1000);
						return;
					}
				} 

				this.articleList = this.articleList.concat(articleList);

				this.loadSwitch = true;
				this.offset += limit;
			}).catch(err => {
				console.log(err.message);
			});
		},
		thumbnailSrc(hash, regular) {

			return `${config.static}thumbnail/${hash}/regular/${regular}`;
		},
		getAccountInfo() {

			return axios.get(`app/account`)
				.then(res => {
					this.street = res.data.data.street;
				});
		},
		getUrl() {
			
			if (this.query === 'all') {
				this.title = '领导圈';

				return 'app/article';
			} else if (this.query === 'subscribe') {
				this.title = '关注';

				const channelList = this.subscribe.map(channel => channel.channelId);

				if (channelList.length === 0) {
					this.hasArticle = false;
				}

				return `app/article?channel=${channelList}`
			}
		},
		onInfiniteScroll() {
			if (this.loadSwitch) {
				this.getArticleList({
					offset: this.offset
				});
				this.loadSwitch = false;
			}
		}
	},
	computed: {
		isLogin() {
			return this.$store.state.signedIn;
		}
	},
	mounted() {
		if (!this.isLogin) {
			this.$f7router.navigate('/login/');
		} else {
			this.query = this.$f7Route.query.parameter;

			this.getSubscribe().then(() => {
			this.getChannelList().then(() => {
				this.getArticleList({
					offset: null
				});
				this.getAccountInfo();
				});
			});
		}
	}
}
</script>

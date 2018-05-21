<template>

<f7-page name="see">
	<f7-navbar title="看一看" back-link></f7-navbar>

	<f7-list media-list class="no-margin-top">
		<!-- <f7-list-item swipeout
			@swipeout:deleted="onSwipoutDeleted"
			title="统战知识 | 抗日民族统一战线：抗日战争胜利的根本保证"
			subtitle="中国抗日战争，是中国近代以来抗击外敌入侵第一次取得完全胜利的伟大民族解放战争，也是世界反法西斯战争的重要组成部分。而抗日战争最终取得完全胜利与中国共产党所倡导建立的以国共合作为基础的抗日民族统一战线是密不可分的。"
			link="/article">
			<f7-chip slot="text">
				<f7-link text="xx频道" slot="text" href="/channel" color=""></f7-link>
			</f7-chip>
			<span slot="text" class="margin-left">2018/03/16 13:55</span>
			<f7-swipeout-actions>
				<f7-swipeout-button delete>不感兴趣</f7-swipeout-button>
			</f7-swipeout-actions>
		</f7-list-item>
		<f7-list-item swipeout
			@swipeout:deleted="onSwipoutDeleted"
			title="港澳台海 | 西青区委常委、统战部长董秀琴会见"
			subtitle="为进一步加大对台招商服务力度，促进重点台资项目发展，4月2日，区委常委、区委统战部部长董秀琴会见了台湾冠德集团董事长马志纲一行。董秀琴与马志纲一行进行了亲切的交流，详细了解了冠德环球购物中心的运营情况，听取了企业未来的发展规划和目标，对企业扎根西青、服务天津的发展理念和稳步提升的经营业绩表示了肯定。"
			link="">
			<f7-chip text="xx频道" slot="text"></f7-chip>
			<span slot="text" class="margin-left">2018/03/14 20:35</span>
			<f7-swipeout-actions>
				<f7-swipeout-button delete>不感兴趣</f7-swipeout-button>
			</f7-swipeout-actions>
		</f7-list-item>
		<f7-list-item swipeout
			@swipeout:deleted="onSwipoutDeleted"
			title="统战大走访 | 民进西青工委走访慰问退休会员"
			subtitle="按照西青区委统战部工作部署以及开展“大调研大走访”活动的要求，日前，民进西青工委有关负责同志带队对部分退休老会员进行走访慰问。"
			link="">
			<f7-chip text="xx频道" slot="text"></f7-chip>
			<span slot="text" class="margin-left">2018/02/26 07:38</span>
			<f7-swipeout-actions>
				<f7-swipeout-button delete>不感兴趣</f7-swipeout-button>
			</f7-swipeout-actions>
		</f7-list-item> -->
		<f7-list-item swipeout
			@swipeout:deleted="onSwipoutDeleted"
			v-for="(article, index) in articleList"
			:key="index"
			:title="article.title"
			:subtitle="article.abstract"
			:link="`/article/${article.id}`">
			<!-- <f7-chip text="xx频道" slot="text"></f7-chip> -->
			<span slot="text" class="margin-left">2018/02/26 07:38</span>
			<f7-swipeout-actions>
				<f7-swipeout-button delete>不感兴趣</f7-swipeout-button>
			</f7-swipeout-actions>
		</f7-list-item>
	</f7-list>

</f7-page>
</template>

<script>
import axios from '../../../axios.js';

export default {
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
		}
	}
}
</script>


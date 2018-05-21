<template>

<f7-page name="article">
	<f7-navbar title="文章" back-link></f7-navbar>

	<!-- <f7-block strong class="no-margin-top"> 
		<h3>【统战知识】抗日民族统一战线：抗日战争胜利的根本保证</h3>
		<f7-block-header>
			<span>2018-03-18</span>
			<f7-link text="xx 频道" class="margin-left" href="/channel"></f7-link>
		</f7-block-header>
		<p>中国抗日战争，是中国近代以来抗击外敌入侵第一次取得完全胜利的伟大民族解放战争，也是世界反法西斯战争的重要组成部分。而抗日战争最终取得完全胜利与中国共产党所倡导建立的以国共合作为基础的抗日民族统一战线是密不可分的。</p>
		<p>“九一八事变”后，面对日寇的蛮横侵略，中国共产党率先发表一系列宣言，号召广大民族武装抗日。随着民族危机的日益加深，抗日救亡成为中华儿女的共同要求。为制定适应新形势的政治路线和策略方针，1935年12月17日至25日，中共中央在陕西安定县（今子长县）瓦窑堡召开政治局扩大会议。会议较为完整和系统地提出了建立抗日民族统一战线的基本政策。1936年“西安事变”爆发后，中国共产党又以国家、民族前途为重，全力促成“西安事变”的和平解决，推动了全国抗日民族统一战线的初步建立。1937年7月7日，日本挑起“七七事变”，发动了全面侵华战争，中国全民族抗战爆发。7月8日，中国共产党通电全国，指出只有实行全民族抗战，才是中国的出路；号召全国人民、军队和政府团结起来，筑成民族统一战线的坚固长城。中国共产党通过不懈的努力，实现了全民族共同抗战的崭新局面。</p>
		<p>中国人民抗日战争的伟大胜利，为中华民族由近代以来的深重危机走向伟大复兴确立了历史转折点。抗日民族统一战线，是争取抗日战争取得胜利的根本保证，没有抗日民族统一战线，就没有抗日战争的最后胜利。</p>
	</f7-block> -->
	<f7-block strong class="no-margin-top"> 
		<h3>{{article.title}}</h3>
		<f7-block-header>
			<span>{{article.created_at}}</span>
			<span>浏览次数:{{article.view}}</span>
			<f7-link :text="`${channel}频道`" class="margin-left" :href="`/channel/${this.channelId}`"></f7-link>
		</f7-block-header>
		<div v-html="article.content" class="article-content"></div>
	</f7-block>

	<f7-toolbar bottom-md>
		<f7-link icon-f7="heart" @click="like"></f7-link>
		<f7-link icon-f7="star" @click="collect"></f7-link>
		<f7-link icon-f7="forward"></f7-link>

	</f7-toolbar>

</f7-page>
</template>
<script>
import axios from '../../../axios.js';
import MarkdownIt from 'markdown-it';
import _ from 'lodash';
import dateFormat from 'dateformat';

const md = MarkdownIt({
	breaks: true
});

export default {
	data() {
		return {
			id: this.$f7Route.params.id,
			article: {
				title: '',
				content: '',
				created_at: '',
				view: ''
			},
			channelId: '',
			channel: ''
		}
	},
	mounted() {
		this.getArticle().then(() => {

			this.getChannel();
		});
	},
	methods: {
		getArticle() {
			return axios.get(`app/article/${this.id}`).then(res => {
				
				const mixedAccount = _.pick(res.data.data, [
					'title', 'content', 'created_at', 'view'
				]);

				this.channelId = res.data.data.channel;

				mixedAccount.content = _.unescape(md.render(mixedAccount.content))
				mixedAccount.created_at = dateFormat(mixedAccount.created_at, 'yyyy/mm/dd HH:MM');

				this.article = mixedAccount;
			});
		},
		getChannel() {
			return axios.get(`app/channel/${this.channelId}`).then(res => {
				this.channel = res.data.data.name;
			});
		},
		collect() {
			return axios.post(`app/article/${this.id}/favorite`).then(res => {
				console.log('collected!');
			}).catch(err => {
				console.log(err.message);
			});
		},
		like() {
			return axios.post(`app/article/${this.id}/like`).then(res => {
				console.log('liked!');
			}).catch(err => {
				console.log(err.message);
			});
		}
	}
}
</script>

<style lang="less">
.article-content {
	img {
		width: 100%;
	}
	p {
		text-indent: 2em;
	}
}
</style>

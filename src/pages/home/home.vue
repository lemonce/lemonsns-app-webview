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
				<f7-icon material="description"></f7-icon><br>
				<f7-link
					text="闻资讯"
					href="/center"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col class="padding-top">
				<f7-icon material="business"></f7-icon><br>
				<f7-link
					text="文化站"
					href="/center"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col class="padding-top">
				<f7-icon material="chat_bubble_outline"></f7-icon><br>
				<f7-link
					text="通知栏"
					href="/activity"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col class="padding-top">
				<f7-icon material="border_color"></f7-icon><br>
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
				<f7-icon material="people"></f7-icon><br>
				<f7-link
					text="群英汇"
					href="/center"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col class="padding-top">
				<f7-icon material="live_tv"></f7-icon><br>
				<f7-link
					text="微课堂"
					href="/center"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col class="padding-top">
				<f7-icon material="playlist_add_check"></f7-icon><br>
				<f7-link
					text="填填看"
					href="/vote-index"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col class="padding-top">
				<f7-icon material="drafts"></f7-icon><br>
				<f7-link
					text="投递箱"
					href="/center"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
		</f7-row>
	</div>

	<f7-block-title class="margin-bottom">新闻中心</f7-block-title>
	<f7-list media-list>
		<f7-list-item
			title="统战知识 | 抗日民族统一战线：抗日战争胜利的根本保证"
			text="中国抗日战争，是中国近代以来抗击外敌入侵第一次取得完全胜利的伟大民族解放战争，也是世界反法西斯战争的重要组成部分。而抗日战争最终取得完全胜利与中国共产党所倡导建立的以国共合作为基础的抗日民族统一战线是密不可分的。"
			link="/article">
			<div slot="media">
				<img src="../../images/home/slide1.jpg" style="width:6rem">
			</div>
		</f7-list-item>
		<f7-list-item
			title="港澳台海 | 西青区委常委、统战部长董秀琴会见"
			text="为进一步加大对台招商服务力度，促进重点台资项目发展，4月2日，区委常委、区委统战部部长董秀琴会见了台湾冠德集团董事长马志纲一行。董秀琴与马志纲一行进行了亲切的交流，详细了解了冠德环球购物中心的运营情况，听取了企业未来的发展规划和目标，对企业扎根西青、服务天津的发展理念和稳步提升的经营业绩表示了肯定。"
			link="/article">
			<div slot="media">
				<img src="../../images/home/slide2.jpg" style="width:6rem">
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
export default {
	name: 'home',
	
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

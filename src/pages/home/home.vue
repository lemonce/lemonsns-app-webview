<template>

<div>
	<f7-swiper pagination :params="{ spaceBetween: 50}" class="home-swiper">
		<f7-swiper-slide>Slide 1</f7-swiper-slide>
		<f7-swiper-slide>Slide 2</f7-swiper-slide>
		<f7-swiper-slide>Slide 3</f7-swiper-slide>
	</f7-swiper>

	<div id="home-item-pool" class="margin-top">
		<f7-row no-gap>
			<f7-col>
				<f7-link
					text="News"
					href="/center"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col>
				<f7-link
					text="Art"
					href="/center"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col>
				<f7-link
					text="Activities"
					href="/activity"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col>
				<f7-link
					text="Sign-in"
					href="/"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
		</f7-row>
		<f7-row no-gap>
			<f7-col>
				<f7-link
					text="Personnel"
					href="/center"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col>
				<f7-link
					text="Study"
					href="/center"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col>
				<f7-link
					text="Vote"
					href="/vote"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col>
				<f7-link
					text="Delivery"
					href="/center"
					color="black"
					class="padding-vertical"
				></f7-link>
			</f7-col>
		</f7-row>
	</div>

	<f7-block-title class="margin-bottom">Songs</f7-block-title>
	<f7-list media-list>
		<f7-list-item
			title="Item 1"
			subtitle="Subtitle 1"
			text="Item 1 Text"
			link="/article"></f7-list-item>
		<f7-list-item
			title="Item 1"
			subtitle="Subtitle 2"
			text="Item 2 Text"
			link="/article"></f7-list-item>
	</f7-list>

	<f7-block-title>Songs</f7-block-title>
	<f7-list media-list>
		<f7-list-item
			title="Item 1"
			subtitle="Subtitle 1"
			text="Item 1 Text"
			link="/article"></f7-list-item>
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
	height: 10rem;
}
#home-item-pool {
	div.col {
		background: #fff;
		text-align: center;
		border: 1px solid #ddd;
	}
}
</style>

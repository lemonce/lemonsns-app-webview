<template>

<!-- <f7-page name="home">
	<common-navbar title="My App"></common-navbar> -->
<div>
	
	
	<f7-swiper pagination :params="{ spaceBetween: 50}" class="home-swiper">
		<f7-swiper-slide>Slide 1</f7-swiper-slide>
		<f7-swiper-slide>Slide 2</f7-swiper-slide>
		<f7-swiper-slide>Slide 3</f7-swiper-slide>
	</f7-swiper>

	<f7-block>
		<f7-row>
			<f7-col>Col 1</f7-col>
			<f7-col>Col 2</f7-col>
			<f7-col>Col 3</f7-col>
			<f7-col>Col 3</f7-col>
		</f7-row>
		<f7-row>
			<f7-col>Col 1</f7-col>
			<f7-col>Col 2</f7-col>
			<f7-col>Col 3</f7-col>
			<f7-col>Col 3</f7-col>
		</f7-row>
	</f7-block>

	<f7-block-title>Songs</f7-block-title>
	<f7-list media-list>
		<f7-list-item title="Item 1" subtitle="Subtitle 1" text="Item 1 Text"></f7-list-item>
		<f7-list-item title="Item 1" subtitle="Subtitle 2" text="Item 2 Text"></f7-list-item>
		<f7-list-item title="Item 1" subtitle="Subtitle 2" text="Item 2 Text"></f7-list-item>
	</f7-list>

	<f7-block-title>Songs</f7-block-title>
	<f7-list media-list>
		<f7-list-item title="Item 1" subtitle="Subtitle 1" text="Item 1 Text"></f7-list-item>
		<f7-list-item title="Item 1" subtitle="Subtitle 2" text="Item 2 Text"></f7-list-item>
		<f7-list-item title="Item 1" subtitle="Subtitle 2" text="Item 2 Text"></f7-list-item>
	</f7-list>

	<f7-block-title>Songs</f7-block-title>
	<f7-list media-list>
		<f7-list-item title="Item 1" subtitle="Subtitle 1" text="Item 1 Text"></f7-list-item>
		<f7-list-item title="Item 1" subtitle="Subtitle 2" text="Item 2 Text"></f7-list-item>
		<f7-list-item title="Item 1" subtitle="Subtitle 2" text="Item 2 Text"></f7-list-item>
	</f7-list>

	<!-- <common-tabbar></common-tabbar> -->

	
	
<!-- </f7-page> -->
</div>
</template>

<script>
import CommonTabbar from '../../golbal/tabbar.vue';
import CommonNavbar from '../../golbal/navbar.vue';

import MessageView from '../message/message.vue';
import FindView from '../find/find.vue';
import PersonalView from '../personal/personal.vue';

export default {
	name: 'home',
	components: { CommonTabbar, CommonNavbar, MessageView, FindView, PersonalView },
	
}
</script>


<style lang="less">
.home-swiper {
	height: 10rem;
}
</style>

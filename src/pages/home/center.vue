<template>

<f7-page name="center">
	<f7-navbar title="新闻中心" back-link></f7-navbar>

	<img src="http://lorempixel.com/1000/600/nature/3/" width="100%">

	<f7-toolbar tabbar bottom-md>
		<f7-link active tab-link tab-link-active
			text="多党合作"
			href="#tab1"
			style="font-size:14px"
		></f7-link>
		<f7-link tab-link
			text="民族宗教"
			href="#tab2"
			style="font-size:14px"
		></f7-link>
		<f7-link tab-link
			text="非公经济"
			href="#tab3"
			style="font-size:14px"
		></f7-link>
		<f7-link tab-link
			text="党外人才"
			href="#tab4"
			style="font-size:14px"
		></f7-link>
		<f7-link tab-link
			text="港澳台海"
			href="#tab5"
			style="font-size:14px"
		></f7-link>
	</f7-toolbar>
	<f7-tabs>
		<f7-tab id="tab1" tab-active>
			<tab-test></tab-test>
		</f7-tab>
		<f7-tab id="tab2">
			<tab-test></tab-test>
		</f7-tab>
		<f7-tab id="tab3">
			<tab-test></tab-test>
		</f7-tab>
		<f7-tab id="tab4">
			<tab-test></tab-test>
		</f7-tab>
		<f7-tab id="tab5">
			<tab-test></tab-test>
		</f7-tab>
	</f7-tabs>
</f7-page>
</template>

<script>
import TabTest from './tab-test.vue';

export default {
	name: 'center',
	components: {
		TabTest
	}
}
</script>

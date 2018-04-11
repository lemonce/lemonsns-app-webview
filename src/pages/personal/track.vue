<template>

<f7-page name="track">
	<f7-navbar title="足迹" back-link></f7-navbar>

	<f7-block-title class="margin-vertical">今天</f7-block-title>
	<f7-list media-list class="margin-vertical">
		<f7-list-item
			title="活动-2"
			link="/activity-detail">
			<span slot="text">2018/01/29</span>
			<f7-icon f7="heart" slot="text" size="15px" style="line-height:27px"></f7-icon>
		</f7-list-item>
		<f7-list-item
			title="活动-3"
			link>
			<span slot="text">2018/01/29</span>
			<f7-icon f7="heart" slot="text" size="15px" style="line-height:27px"></f7-icon>
		</f7-list-item>
	</f7-list>

	<f7-block-title class="margin-vertical">昨天</f7-block-title>

	<f7-block-title class="margin-vertical">上周</f7-block-title>

	<f7-block-title class="margin-top">更早</f7-block-title>
	
</f7-page>
</template>

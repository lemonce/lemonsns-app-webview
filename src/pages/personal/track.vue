<template>

<f7-page name="track">
	<f7-navbar title="Track" back-link></f7-navbar>

	<f7-block-title class="margin-vertical">Today</f7-block-title>
	<f7-list media-list class="margin-vertical">
		<f7-list-item
			title="activity-2"
			link="/activity-detail">
			<span slot="text">2018/01/29</span>
			<f7-icon f7="heart" slot="text" size="15px" style="line-height:27px"></f7-icon>
		</f7-list-item>
		<f7-list-item
			title="activity-3"
			link>
			<span slot="text">2018/01/29</span>
			<f7-icon f7="heart" slot="text" size="15px" style="line-height:27px"></f7-icon>
		</f7-list-item>
	</f7-list>

	<f7-block-title class="margin-vertical">Yesterday</f7-block-title>

	<f7-block-title class="margin-vertical">Week</f7-block-title>

	<f7-block-title class="margin-top">Earlier</f7-block-title>
	
</f7-page>
</template>

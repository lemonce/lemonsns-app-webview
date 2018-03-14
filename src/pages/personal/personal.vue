<template>

<f7-page name="personal" id="personal-page">
	<common-navbar title="Personal"></common-navbar>
<!-- <div> -->


	<f7-list media-list class="no-margin-top no-margin-bottom">
		<f7-list-item
			link=""
			title="Name"
			subtitle="Company"></f7-list-item>

		<f7-row no-gap>
			<f7-col>
				<f7-icon f7="card"></f7-icon>
				<p class="no-margin">Card</p>
			</f7-col>
			<f7-col>
				<f7-icon f7="star"></f7-icon>
				<p class="no-margin">Collections</p>
			</f7-col>
			<f7-col>
				<f7-icon f7="eye"></f7-icon>
				<p class="no-margin">Follow</p>
			</f7-col>
		</f7-row>
	</f7-list>

	<f7-list class="margin-top">
		<f7-list-item
			link=""
			title="Tracks"></f7-list-item>
		<f7-list-item
			link=""
			title="Advice"></f7-list-item>
		<f7-list-item
			link=""
			title="Feedback"></f7-list-item>
	</f7-list>

	<f7-list class="margin-top">
		<f7-list-item
			link=""
			title="Settings"></f7-list-item>
	</f7-list>

	<common-tabbar></common-tabbar>
</f7-page>
<!-- </div> -->
</template>

<script>
import CommonTabbar from '../../golbal/tabbar.vue';
import CommonNavbar from '../../golbal/navbar.vue';

export default {
	name: 'personal',
	components: { CommonTabbar, CommonNavbar }
}
</script>

<style lang="less">
#personal-page {
	div.col {
		text-align: center;
		background: #fff;
		border: 1px solid #ddd;
		padding: .5rem;
	}
}

</style>

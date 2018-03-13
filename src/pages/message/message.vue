<template>

<f7-page name="message">
	<common-navbar title="Message">
		<f7-link slot="left" href="/message">
			<f7-icon if-ios="f7:bell" if-md="material:notifications_none"></f7-icon>
		</f7-link>
		<f7-link slot="right">
			<f7-icon material="crop_free"></f7-icon>
		</f7-link>
	</common-navbar>

	<f7-list media-list class="no-margin-top">
		<f7-list-item
			link="/"
			title="home"
			subtitle="Subtitle 1"
			text="Item 1 Text"></f7-list-item>
		<f7-list-item
			link=""
			title="Item 1"
			subtitle="Subtitle 2"
			text="Item 2 Text"></f7-list-item>
	</f7-list>

	<common-tabbar></common-tabbar>
</f7-page>

</template>

<script>
import CommonTabbar from '../../golbal/tabbar.vue';
import CommonNavbar from '../../golbal/navbar.vue';

export default {
	name: 'message',
	components: { CommonTabbar, CommonNavbar }
}
</script>
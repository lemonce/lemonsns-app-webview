<template>

<f7-page name="find">
	<common-navbar title="Find">
		<f7-link slot="left" href="/find">
			<f7-icon if-ios="f7:bell" if-md="material:notifications_none"></f7-icon>
		</f7-link>
		<f7-link slot="right">
			<f7-icon material="crop_free"></f7-icon>
		</f7-link>
	</common-navbar>

	<f7-list class="margin-vertical">
		<f7-list-item
			link=""
			title="Leader"
			badge="1"
			badge-color="red"></f7-list-item>
		<f7-list-item
			link=""
			title="Follow"></f7-list-item>
	</f7-list>

	<f7-list class="margin-vertical">
		<f7-list-item
			link=""
			title="Scan"></f7-list-item>
		<f7-list-item
			link=""
			title="See"></f7-list-item>
	</f7-list>

	<f7-list class="margin-vertical">
		<f7-list-item
			link=""
			title="News"></f7-list-item>
		<f7-list-item
			link=""
			title="Artical"></f7-list-item>
		<f7-list-item
			link=""
			title="Actives"></f7-list-item>
		<f7-list-item
			link=""
			title="Survey"></f7-list-item>
		<f7-list-item
			link=""
			title="Study"></f7-list-item>
		<f7-list-item
			link=""
			title="Delivery"></f7-list-item>
	</f7-list>

	<common-tabbar></common-tabbar>
</f7-page>

</template>

<script>
import CommonTabbar from '../../golbal/tabbar.vue';
import CommonNavbar from '../../golbal/navbar.vue';

export default {
	name: 'find',
	components: { CommonTabbar, CommonNavbar }
}
</script>
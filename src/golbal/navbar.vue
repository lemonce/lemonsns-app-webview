<template>

<f7-navbar>
	<f7-nav-left>
		<f7-link href="/message">
			<f7-icon if-ios="f7:bell" if-md="material:notifications_none"></f7-icon>
		</f7-link>
	</f7-nav-left>
	<f7-nav-title>{{title}}</f7-nav-title>
	<f7-nav-right>
		<f7-link href="/">
			<f7-icon material="crop_free"></f7-icon>
		</f7-link>
	</f7-nav-right>
</f7-navbar>

</template>

<script>
export default {
	name: 'common-navbar',
	props: [ 'title' ]
}
</script>

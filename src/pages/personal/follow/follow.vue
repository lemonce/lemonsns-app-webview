<template>

<f7-page name="follow">
	<f7-navbar title="Follow management" back-link></f7-navbar>

	<f7-toolbar tabbar>
		<f7-link active tab-link tab-link-active
			text="Already"
			href="#already"
		></f7-link>
		<f7-link tab-link
			text="All"
			href="#all-follow"
		></f7-link>
	</f7-toolbar>
	<f7-tabs>
		<f7-tab id="already" tab-active>
			<already></already>
		</f7-tab>
		<f7-tab id="all-follow">
			<all-follow></all-follow>
		</f7-tab>
	</f7-tabs>
</f7-page>

</template>

<script>
import Already from './already.vue';
import AllFollow from './follow-all.vue';

export default {
	name: 'follow',
	components: {
		Already,
		AllFollow
	}
}
</script>

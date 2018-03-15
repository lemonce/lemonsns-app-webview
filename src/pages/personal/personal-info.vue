<template>
<f7-page name="personal-info">
	<f7-navbar title="Personal info" back-link></f7-navbar>

	<f7-list class="margin-top">
		<f7-list-item
			v-for="(info, index) in infoList"
			:key="index"
			:link="info.link"
			:title="info.title"
			:after="info.after"
		></f7-list-item>
	</f7-list>
</f7-page>
</template>

<script>
export default {
	name: 'personal-info',
	data() {
		return {
			infoList: [
				{
					link: '',
					title: 'Head',
					after: ''
				},
				{
					link: '',
					title: 'Account',
					after: '135xxxxxxxx'
				},
				{
					link: '',
					title: 'Phone',
					after: '135xxxxxxxx'
				},
				{
					link: '',
					title: 'Name',
					after: 'zhang San'
				},
				{
					link: '',
					title: 'Sex',
					after: 'Man'
				},
				{
					link: '',
					title: 'Party',
					after: 'Nonparty'
				},
				{
					link: '',
					title: 'Nation',
					after: 'Han'
				},
				{
					link: '',
					title: 'Company',
					after: 'xxxx group'
				},
			]
		}
	}
}
</script>

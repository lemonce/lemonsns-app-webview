<template>
<div>
	<f7-list media-list class="margin-top">
		<f7-list-item
			link="/article"
			title="新闻 1"
			subtitle="副标题 1"
			text="新闻摘要"></f7-list-item>
		<f7-list-item
			link="/article"
			title="新闻 2"
			subtitle="副标题 2"
			text="新闻摘要"></f7-list-item>
	</f7-list>
</div>
</template>

<script>
export default {
	mounted() {
		// console.log(this.$f7route)
	},
	props: ['data']
}
</script>


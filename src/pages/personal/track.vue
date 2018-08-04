<template>

<f7-page name="track">
	<f7-navbar title="足迹" back-link></f7-navbar>
	
	<f7-list media-list class="margin-vertical">
		<f7-list-item
			v-if="hasBrowserHistory"
			v-for="(article, index) in browseHistory"
			:key="index"
			:title="article.title"
			:link="`/article/${article.id}`">
			<span slot="text">{{article.viewTime}}</span>
		</f7-list-item>
		<f7-list-item>
			<f7-block-title v-if="!hasBrowserHistory">没有正在进行的活动/会议</f7-block-title>
		</f7-list-item>
	</f7-list>
	
</f7-page>
</template>

<script>
export default {
	data() {
		return {
			hasBrowserHistory: true
		}
	},
	computed: {
		browseHistory() {
			const stack = this.$store.state.browseHistory.stack;

			if (stack.length === 0) {
				this.hasBrowserHistory = false;
			}
			
			return stack;
		}
	}
}
</script>


<template>

<div id="personal-page">
	<f7-list media-list class="margin-top no-margin-bottom">
		<f7-list-item
			link="/personal-info"
			title="Zhang San"
			subtitle="xxxx group">
			<f7-icon material="person" slot="media" size="44px"></f7-icon>
		</f7-list-item>

		<f7-row no-gap>
			<f7-col>
				<f7-link
					href="/card"
					icon-f7="card"
					text="Card"
					color="black"
					class="no-margin padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col>
				<f7-link
					href="/collection"
					icon-f7="star"
					text="Collection"
					color="black"
					class="no-margin padding-vertical"
				></f7-link>
			</f7-col>
			<f7-col>
				<f7-link
					href="/follow"
					icon-f7="eye"
					text="Follow"
					color="black"
					class="no-margin padding-vertical"
				></f7-link>
			</f7-col>
		</f7-row>
	</f7-list>

	<f7-list class="margin-top">
		<f7-list-item
			link="/track"
			title="Tracks"
		></f7-list-item>
		<f7-list-item
			link="/activity"
			title="Activities"
		></f7-list-item>
		<f7-list-item
			link="/advice"
			title="Advice"
		></f7-list-item>
		<f7-list-item
			link="/feedback"
			title="Feedback"
		></f7-list-item>
	</f7-list>

	<f7-list class="margin-top">
		<f7-list-item
			link="/setting"
			title="Settings"
		></f7-list-item>
	</f7-list>

</div>

</template>

<script>
export default {
	name: 'personal',
}
</script>

<style lang="less">
#personal-page {
	div.col {
		text-align: center;
		background: #fff;
		border: 1px solid #ddd;
	}
}

</style>

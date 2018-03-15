<template>

<div>
	<f7-list class="no-margin-top">
		<f7-list-item title="Chanel 1">
		</f7-list-item>
		<f7-list-item swipeout title="Chanel 2" @swipeout:deleted="onSwipeoutDeleted">
			<f7-swipeout-actions>
				<f7-swipeout-button delete>Unfollow</f7-swipeout-button>
			</f7-swipeout-actions>
		</f7-list-item>
	</f7-list>
</div>
</template>

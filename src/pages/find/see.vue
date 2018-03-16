<template>

<f7-page name="see">
	<f7-navbar title="See" back-link></f7-navbar>

	<f7-list media-list class="no-margin-top">
		<f7-list-item swipeout
			@swipeout:deleted="onSwipoutDeleted"
			title="Big news!"
			subtitle=" It doesn't limit your imagination or offer ways of any solutions somehow."
			link="/article">
			<f7-chip slot="text">
				<f7-link text="xx chanel" slot="text" href="/chanel" color="white"></f7-link>
			</f7-chip>
			<span slot="text" class="margin-left">2018/03/16 13:55</span>
			<f7-swipeout-actions>
				<f7-swipeout-button delete>Delete</f7-swipeout-button>
			</f7-swipeout-actions>
		</f7-list-item>
		<f7-list-item swipeout
			@swipeout:deleted="onSwipoutDeleted"
			title="She filled in the White House"
			subtitle="Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps."
			link="">
			<f7-chip text="xx chanel" slot="text"></f7-chip>
			<span slot="text" class="margin-left">2018/03/14 20:35</span>
			<f7-swipeout-actions>
				<f7-swipeout-button delete>Delete</f7-swipeout-button>
			</f7-swipeout-actions>
		</f7-list-item>
		<f7-list-item swipeout
			@swipeout:deleted="onSwipoutDeleted"
			title="The British Parliament Building"
			subtitle="It is focused only on iOS and Android (Material) to bring the best experience and simplicity."
			link="">
			<f7-chip text="xx chanel" slot="text"></f7-chip>
			<span slot="text" class="margin-left">2018/02/26 07:38</span>
			<f7-swipeout-actions>
				<f7-swipeout-button delete>Delete</f7-swipeout-button>
			</f7-swipeout-actions>
		</f7-list-item>
	</f7-list>

</f7-page>
</template>

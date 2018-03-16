<template>

<f7-page name="circle">
	<f7-navbar title="Leadership circle" back-link></f7-navbar>

	<f7-card>
		<f7-card-header>
			<f7-list media-list>
				<f7-list-item
					title="Zhang San"
					subtitle="1 minute ago">
					<f7-icon slot="media" f7="social_github" size="36px"></f7-icon>
				</f7-list-item>
			</f7-list>
		</f7-card-header>
		<f7-card-content>
			<p>What a nice day today!</p>
		</f7-card-content>
		<f7-card-footer>
			<f7-link icon-f7="heart_fill" text="1"></f7-link>
			<f7-link icon-f7="star"></f7-link>
			<f7-link icon-f7="forward"></f7-link>
		</f7-card-footer>
	</f7-card>
	
	<f7-card>
		<f7-card-header>
			<f7-list media-list>
				<f7-list-item
					title="Wang Ha Ha"
					subtitle="two hours ago">
					<f7-icon slot="media" f7="social_twitter_fill" size="36px"></f7-icon>
				</f7-list-item>
			</f7-list>
		</f7-card-header>
		<f7-card-content>
			<img src="http://lorempixel.com/1000/600/nature/3/" width="100%">
		</f7-card-content>
		<f7-card-footer>
			<f7-link icon-f7="heart"></f7-link>
			<f7-link icon-f7="star"></f7-link>
			<f7-link icon-f7="forward"></f7-link>
		</f7-card-footer>
	</f7-card>
</f7-page>
</template>

<template>

<f7-page name="circle">
	<f7-navbar title="领导圈" back-link></f7-navbar>

	<f7-card>
		<f7-card-header>
			<f7-list media-list>
				<f7-list-item
					title="张三"
					subtitle="1分钟前">
					<f7-icon slot="media" f7="social_github" size="36px"></f7-icon>
				</f7-list-item>
			</f7-list>
		</f7-card-header>
		<f7-card-content>
			<p>多么棒的一天！</p>
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
					title="王权有"
					subtitle="两小时前">
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

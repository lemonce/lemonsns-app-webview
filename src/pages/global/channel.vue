<template>

<f7-page name="channel">
	<f7-navbar title="xx 频道" back-link></f7-navbar>

	<f7-list media-list class="no-margin">
		<f7-list-item
			title="xx 频道">
			<f7-icon slot="media" material="album" size="44px" color="yellow"></f7-icon>
			<f7-chip slot="text" color="green">
				<f7-link text="关注" slot="text" href="/channel" color="white"></f7-link>
			</f7-chip>
		</f7-list-item>
	</f7-list>

	<f7-block-title class="margin-top">频道简介</f7-block-title>
	<f7-block strong>
		<p>宣传统战政策 讲述统战故事 团结统战成员</p>
	</f7-block>
</f7-page>
</template>

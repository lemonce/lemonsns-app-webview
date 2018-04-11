<template>

<f7-page name="card">
	<f7-navbar title="我的名片" back-link></f7-navbar>

	<f7-card>
		<f7-card-header>
			<f7-list media-list>
				<f7-list-item
					title="张三"
					subtitle="xxxx组">
					<f7-icon material="person" slot="media" size="44px"></f7-icon>
				</f7-list-item>
			</f7-list>
		</f7-card-header>
		<f7-card-content>
			<img src="../../../build/qr-code.svg" width="100%"/>
		</f7-card-content>
	</f7-card>
</f7-page>
</template>

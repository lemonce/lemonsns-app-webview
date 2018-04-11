<template>

<f7-page name="vote">
	<f7-navbar title="xx 投票" back-link></f7-navbar>
	
	<f7-block-title class="margin-top">下列你最喜欢的是?</f7-block-title>
	<f7-list>
		<f7-list-item checkbox title="书" name="demo-checkbox" checked></f7-list-item>
		<f7-list-item checkbox title="电影" name="demo-checkbox"></f7-list-item>
		<f7-list-item checkbox title="食物" name="demo-checkbox"></f7-list-item>
		<f7-list-item checkbox title="饮料" name="demo-checkbox"></f7-list-item>
	</f7-list>

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill tab-link back>提交</f7-button>
			</f7-col>
		</f7-row>
	</f7-block>

</f7-page>
</template>

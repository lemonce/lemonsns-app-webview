<template>

<f7-page name="vote">
	<f7-navbar title="xx vote" back-link></f7-navbar>
	
	<f7-block-title class="margin-top">What you like most is?</f7-block-title>
	<f7-list>
		<f7-list-item checkbox title="Books" name="demo-checkbox" checked></f7-list-item>
		<f7-list-item checkbox title="Movies" name="demo-checkbox"></f7-list-item>
		<f7-list-item checkbox title="Food" name="demo-checkbox"></f7-list-item>
		<f7-list-item checkbox title="Drinks" name="demo-checkbox"></f7-list-item>
	</f7-list>

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill tab-link back>Commit</f7-button>
			</f7-col>
		</f7-row>
	</f7-block>

</f7-page>
</template>

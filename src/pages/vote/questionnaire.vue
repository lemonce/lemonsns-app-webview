<template>

<f7-page name="questionnaire">
	<f7-navbar title="xx questionnaire" back-link></f7-navbar>

	<f7-block-title class="margin-top">Rules</f7-block-title>
	<f7-block strong class="margin-vertical">
		<p>Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.</p>
	</f7-block>

	<f7-block-title class="margin-top">Questions</f7-block-title>
	<f7-block-title class="margin-top">1.What you like most is?</f7-block-title>
	<f7-list>
		<f7-list-item checkbox title="Books" name="demo-checkbox" checked></f7-list-item>
		<f7-list-item checkbox title="Movies" name="demo-checkbox"></f7-list-item>
		<f7-list-item checkbox title="Food" name="demo-checkbox"></f7-list-item>
		<f7-list-item checkbox title="Drinks" name="demo-checkbox"></f7-list-item>
	</f7-list>

	<f7-block-title class="margin-top">2.What you like most is?</f7-block-title>
	<f7-list>
		<f7-list-item>
			<f7-input type="textarea"></f7-input>
		</f7-list-item>
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

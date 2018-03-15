<template>

<f7-page name="binding">
	<f7-navbar title="Binding" back-link></f7-navbar>

	<f7-list form class="margin-top">
		<f7-list-item>
			<f7-label>Phone</f7-label>
			<f7-input name="phone" placeholder="Your number" type="text"></f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>Password</f7-label>
			<f7-input name="password" type="password" placeholder="Your password"></f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>Confirm</f7-label>
			<f7-input name="password" type="password" placeholder="Repeat password"></f7-input>
		</f7-list-item>
	</f7-list>

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill tab-link href="/info">Next</f7-button>
			</f7-col>
		</f7-row>
	</f7-block>
	
</f7-page>
</template>

<template>

<f7-page name="modify-password">
	<f7-navbar title="Modify password" back-link></f7-navbar>

	<f7-list class="margin-top">
		<f7-list-item>
			<f7-label>Old password</f7-label>
			<f7-input name="old-password" type="password"></f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>New password</f7-label>
			<f7-input name="new-password" type="password"></f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>Confirm password</f7-label>
			<f7-input name="confirm-password" type="password"></f7-input>
		</f7-list-item>
	</f7-list>

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill tab-link back>Save</f7-button>
			</f7-col>
		</f7-row>
	</f7-block>
</f7-page>
</template>

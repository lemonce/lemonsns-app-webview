<template>

<f7-page name="modify-password">
	<f7-navbar title="修改密码" back-link></f7-navbar>

	<f7-list class="margin-top">
		<f7-list-item>
			<f7-label>旧密码</f7-label>
			<f7-input name="old-password" type="password"></f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>新密码</f7-label>
			<f7-input name="new-password" type="password"></f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>确认密码</f7-label>
			<f7-input name="confirm-password" type="password"></f7-input>
		</f7-list-item>
	</f7-list>

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill tab-link back>保存</f7-button>
			</f7-col>
		</f7-row>
	</f7-block>
</f7-page>
</template>

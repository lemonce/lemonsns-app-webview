<template>

<f7-page name="binding">
	<f7-navbar title="手机绑定" back-link></f7-navbar>

	<f7-list form class="margin-top">
		<f7-list-item>
			<f7-label>手机</f7-label>
			<f7-input name="phone" placeholder="手机号" type="text"></f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>密码</f7-label>
			<f7-input name="password" type="password" placeholder="密码"></f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>确认密码</f7-label>
			<f7-input name="password" type="password" placeholder="重复密码"></f7-input>
		</f7-list-item>
	</f7-list>

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill tab-link href="/info">下一步</f7-button>
			</f7-col>
		</f7-row>
	</f7-block>
	
</f7-page>
</template>

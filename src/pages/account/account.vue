<template>

<f7-page name="account" id="account-index" color-theme="red">
	<f7-block>
		<f7-row>
			<f7-col>
				<img src="../../../build/logo.png" alt="logo">
			</f7-col>
		</f7-row>
	</f7-block>

	<f7-block inset>
		<f7-row>
			<f7-col width="100" class="margin-bottom">
				<f7-button
					big
					tab-link
					login-screen-open="#login-screen">账号登录</f7-button>
			</f7-col>
			<f7-col width="100">
				<f7-button
					big
					tab-link
					href="/binding">注册</f7-button>
			</f7-col>
		</f7-row>
		
	</f7-block>

	<f7-block>
		<!-- <hr> -->

	</f7-block>
</f7-page>

</template>

<style lang="less">
#account-index {
	background: #fff;
	div.col {
		text-align: center;
		margin-top: 5rem;
	}
	img {
		width: 100px;
	}
}
</style>

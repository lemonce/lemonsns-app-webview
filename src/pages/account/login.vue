<template>

<f7-login-screen id="login-screen">
	<f7-view>
		<f7-page login-screen>
			<f7-row>
				<f7-col style="margin-top:5rem">
					<img src="../../../build/logo.png" alt="logo">
				</f7-col>
			</f7-row>
			<f7-login-screen-title>Login</f7-login-screen-title>

			<f7-list form>
				<f7-list-item>
					<f7-label>Phone</f7-label>
					<f7-input name="phone" placeholder="Your number" type="text"></f7-input>
				</f7-list-item>
				<f7-list-item>
					<f7-label>Password</f7-label>
					<f7-input name="password" type="password" placeholder="Your password"></f7-input>
				</f7-list-item>
			</f7-list>
			<f7-list>
				<f7-list-button title="Sign In" href="/index"></f7-list-button>
				<f7-block-footer>
					Click <a href="/binding">Register</a> to have a new account.
				</f7-block-footer>
			</f7-list>
		</f7-page>
	</f7-view>
</f7-login-screen>
		
</template>

<style lang="less">
#login-screen {
	div.col {
		text-align: center;
	}
	img {
		width: 100px;
	}
}
</style>

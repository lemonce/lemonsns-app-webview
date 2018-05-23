<template>

<f7-page name="setting">
	<f7-navbar title="设置" back-link></f7-navbar>

	<f7-list class="margin-vertical">
		<f7-list-item
			link="/message-remind"
			title="新消息提醒">
		</f7-list-item>
		<f7-list-item
			link="/modify-password"
			title="修改密码">
		</f7-list-item>
	</f7-list>

	<f7-list class="margin-top">
		<f7-list-item
			link="/about"
			title="关于">
		</f7-list-item>
		<f7-list-item
			@click="signOut()"
			title="退出登录">
		</f7-list-item>
	</f7-list>
</f7-page>
</template>

<script>
export default {
	name: 'setting',
	methods: {
		signOut() {
			this.$store.dispatch('signOut').then(() => {
				this.$f7router.navigate('/index/');
			})
		}
	}
}
</script>


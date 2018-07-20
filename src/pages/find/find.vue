<template>

<div>
	<f7-list class="margin-vertical">
		<f7-list-item
			link="/circle?parameter=all"
			title="领导圈">
			<f7-icon slot="media" material="camera"></f7-icon>	
		</f7-list-item>
		<f7-list-item
			@click="navigateIfLogin('/circle?parameter=subscribe')"
			title="关注">
			<f7-icon slot="media" material="lightbulb_outline"></f7-icon>	
		</f7-list-item>
	</f7-list>

	<f7-list class="margin-vertical">
		<f7-list-item
			link=""
			title="扫一扫"
			@click="scan()">
			<f7-icon slot="media" material="crop_free"></f7-icon>	
		</f7-list-item>
		<f7-list-item
			link="/see"
			title="看一看">
			<f7-icon slot="media" material="remove_red_eye"></f7-icon>	
		</f7-list-item>
	</f7-list>

	<f7-list class="margin-vertical">
		<f7-list-item
			link="/center/news"
			title="新闻中心">
			<f7-icon slot="media" material="description"></f7-icon>
		</f7-list-item>
		<f7-list-item
			link="/center/culture/article"
			title="文化艺术">
			<f7-icon slot="media" material="business"></f7-icon>
		</f7-list-item>
		<f7-list-item
			@click="navigateIfLogin('/activity')"
			title="活动中心">
			<f7-icon slot="media" material="alarm_on"></f7-icon>
		</f7-list-item>
		<f7-list-item
			link="/group"
			title="人才中心">
			<f7-icon slot="media" material="people"></f7-icon>
		</f7-list-item>
		<f7-list-item
			link="/center/knowledge/article"
			title="知识学习">
			<f7-icon slot="media" material="live_tv"></f7-icon>	
		</f7-list-item>
		<f7-list-item
			@click="navigateIfLogin('/mailbox')"
			title="投递中心">
			<f7-icon slot="media" material="drafts"></f7-icon>	
		</f7-list-item>
	</f7-list>

</div>
</template>

<script>
export default {
	methods: {
		navigateIfLogin(route) {
			if (this.$store.state.signedIn) {
				this.$f7.router.navigate(route);
			} else {
				this.$f7.router.navigate('/loginSyncLoad');
			}
		},
		scan() {
			this.$store.dispatch('openQrcodeScanning').then(url => {
				if (!this.$store.state.signedIn) {
					const dialog = this.$f7.dialog.create({
						title: '扫一扫失败',
						text: '请登陆后再进行签到！',
						buttons: [{
							text: '确定',
							close: true
						}]
					});

					dialog.open();

					return;
				}

				return axios.put(url).then(() => {
					const dialog = this.$f7.dialog.create({
						title: '扫一扫成功',
						text: '签到成功！',
						buttons: [{
							text: '确定',
							close: true
						}]
					});

					dialog.open();
				}).catch(err => {
					const dialog = this.$f7.dialog.create({
						title: '扫一扫失败',
						text: '操作失败！',
						buttons: [{
							text: '确定',
							close: true
						}]
					});

					dialog.open();
				});
			});
		}
	}
}
</script>

import axios from './axios';

export default {
	methods: {
		scan() {
			if (!this.$store.state.signedIn) {
				return this.$f7.toast.create({
					text: '请登陆后再进行签到！',
					closeButton: false,
					closeTimeout: 2000
				}).open();
			}

			this.$store.dispatch('openQrcodeScanning').then(url => {

				return axios.put(url);
			}).then(() => {
					
				this.$f7.toast.create({
					text: '签到成功！',
					closeButton: false,
					closeTimeout: 2000
				}).open();

			}).catch(err => {

				this.$f7.toast.create({
					text: '操作失败！',
					closeButton: false,
					closeTimeout: 2000
				}).open();
			}).then(() => {
				this.$store.dispatch('cancelQrcodeScanning');
			});
		}
	}
};
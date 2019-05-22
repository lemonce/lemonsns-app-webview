<template>
  <f7-page name="questionanswer">
    <f7-navbar title="填填看" back-link></f7-navbar>
    <iframe
      height='100%'
      width='100%'
      :src="iframeSrc"
      frameborder="0"
    ></iframe>
  </f7-page>
</template>

<script>
import axios from '../axios.js';
import config from '../../../config.json';

export default {
	computed: {
		iframeSrc() {
			return `${config.baseURL}/answer.html`;
		}
	},
  methods: {
    receiveMessage(event) {
			this.$f7.dialog.confirm('提交之后无法再修改分数！', `得分： ${event.data}`, () => {
				axios.patch('app/account/score', {
					score: event.data
				}).then(() => {
					window.removeEventListener('message', this.receiveMessage, false);
					this.$f7router.navigate('/index/');
				});
			}, () => {
				window.removeEventListener('message', this.receiveMessage, false);
				this.$f7router.navigate('/index/');
			});
    }
  },
  mounted() {
    window.addEventListener('message', this.receiveMessage, false);
  }
}
</script>

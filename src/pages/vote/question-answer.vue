<template>
  <f7-page name="questionanswer">
    <f7-navbar title="填填看" back-link></f7-navbar>
    <iframe
      height='100%'
      width='100%'
      src="http://localhost:8081"
      frameborder="0"
    ></iframe>
  </f7-page>
</template>

<script>
export default {
  methods: {
    receiveMessage(event) {
      console.log(event);
      this.$f7.dialog.alert(`${event.data}`, '得分', () => {
        this.$f7router.navigate('/index/');
        window.removeEventListener('message', this.receiveMessage, false);
      });
    }
  },
  mounted() {
    if (!this.$store.state.signedIn) {
			this.$f7router.navigate('/login');
		} else {
      window.addEventListener('message', this.receiveMessage, false);
		}
  }
}
</script>

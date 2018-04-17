<template>
	<div id="app">
		<f7-statusbar></f7-statusbar>

		<f7-view main url="/index/" color-theme="red"></f7-view>
		
		<login></login>
	</div>
</template>

<script>
import Login from './pages/account/login.vue';

export default {
	name: 'app',
	components: { Login }
	
}
</script>

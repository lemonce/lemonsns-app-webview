<template>
	<div id="app">
		<f7-statusbar></f7-statusbar>

		<f7-view main url="/">
			<!-- <index-view></index-view> -->
		</f7-view>
		
		<login></login>
	</div>
</template>

<script>
import IndexView from './pages/index.vue';
import Login from './pages/account/login.vue';

export default {
	name: 'app',
	components: { IndexView, Login }
	
}
</script>

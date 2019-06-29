<template>
	<div id="app">
		<f7-statusbar></f7-statusbar>

		<f7-view main url="/index/" color-theme="red" v-if="!qrScanning"></f7-view>
<!-- 		
		<login></login> -->

		<div id="cover_signin" v-if="qrScanning">
				<div id="top"></div>
				<div class="ocrloader">
						<em></em>
						<span></span>
				</div>
				<div id="right"></div>
				<div id="left"></div>
				<div id="bottom">
					<h3 style="text-align:center"><f7-link
						@click="stopScan()"
						text="取消扫描" ></f7-link></h3>
				</div>
		</div>
	</div>
</template>

<script>
import Login from './pages/account/login.vue';

export default {
	name: 'app',
	components: { Login },
	computed: {
		qrScanning() {
			return this.$store.state.qr.scanning;
		}
	},
	methods: {
		stopScan() {
			this.$store.dispatch('cancelQrcodeScanning');
		}
	},
	mounted() {
		// For the best user experience, make sure the user is ready to give your app
		// camera access before you show the prompt. On iOS, you only get one chance.
		if (typeof QRScanner !== 'undefined') {
			QRScanner.prepare(onDone); // show the prompt
		}
		
		function onDone(err, status){
			if (err) {
			// here we can handle errors and clean up any loose ends.
			console.error(err);
			}
			if (status.authorized) {
				// W00t, you have camera access and the scanner is initialized.
				// QRscanner.show() should feel very fast.
			} else if (status.denied) {
			// The video preview will remain black, and scanning is disabled. We can
			// try to ask the user to change their mind, but we'll have to send them
			// to their device settings with `QRScanner.openSettings()`.
			} else {
				// we didn't get permission, but we didn't get permanently denied. (On
				// Android, a denial isn't permanent unless the user checks the "Don't
				// ask again" box.) We can ask again at the next relevant opportunity.
			}
		}
	}
}
</script>

<style lang="less">
html, body {
	background-color: transparent !important;
}
#cover_signin {
	height: 100%;
	
	#top {
			position: absolute;
			width: 100%;
			height: 30%;
			top: 0;
			left: 0;
			background: rgba(0,0,0,.1);
	}
	#bottom {
			position: absolute;
			width: 100%;
			height: 30%;
			bottom: 0;
			left: 0;
			background: rgba(0,0,0,.1);
	}
	#left {
			position: absolute;
			width: 15%;
			height: 40%;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			background: rgba(0,0,0,.1);
	}
	#right {
			position: absolute;
			width: 15%;
			height: 40%;
			top: 50%;
			right: 0;
			transform: translateY(-50%);
			background: rgba(0,0,0,.1);
	}
	.ocrloader {
			margin: auto;
			width: 70%;
			height: 40%;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			padding: 10px;
			border: 1px solid rgba(0,0,0,.1);
			box-sizing: border-box;
	}
	.ocrloader span {
			// position: absolute;
			// left: 0;
			// top: 0;
			width: 95%;
			height: 2%;
			display: block;
			margin: 0 auto;
			padding: 0;
			border-top: rgba(33, 161, 33, 0.1) solid 2px;
			border-bottom: rgba(33, 161, 33, .1) solid 2px;
			border-radius: 20%;
			background-color: rgba(33, 161, 33, .6);
			z-index: -1;
			transform: translateY(135%);
			animation: move 5s linear;
			animation-iteration-count: infinite;
	}
	.ocrloader > div {
			z-index: 1;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			width: 48%;
			backface-visibility: hidden;
	}
	.ocrloader:before,
	.ocrloader:after,
	.ocrloader em:after,
	.ocrloader em:before {
			border-color: #11ce39;
			content: "";
			position: absolute;
			width: 60px;
			height: 60px;
			border-style: solid;
			border-width: 0px;
	}
	.ocrloader:before {
			left: 0;
			top: 0;
			border-left-width: 8px;
			border-top-width: 8px;
	}
	.ocrloader:after {
			right: 0;
			top: 0;
			border-right-width: 8px;
			border-top-width: 8px;
	}
	.ocrloader em:before {
			left: 0;
			bottom: 0;
			border-left-width: 8px;
			border-bottom-width: 8px;
	}
	.ocrloader em:after {
			right: 0;
			bottom: 0;
			border-right-width: 8px;
			border-bottom-width: 8px;
	}
	@keyframes move {
			0% {
					transform: translateY(135%);
			}
			25% {
					transform: translateY(1000%);
			}
			50% {
					transform: translateY(2300%);
			}
			75% {
					transform: translateY(1000%);
			}
			100% {
					transform: translateY(135%);
			}
	}
}
#signin {
    background: transparent;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    position: relative;
 }
</style>
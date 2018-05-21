<template>

<f7-login-screen id="login-screen" color-theme="red">
	<f7-view>
		<f7-page login-screen>
			<f7-row>
				<f7-col style="margin-top:5rem">
					<img src="../../../build/logo.png" alt="logo" width="100px">
				</f7-col>
			</f7-row>
			<f7-login-screen-title>登录</f7-login-screen-title>

			<f7-list form>
				<f7-list-item>
					<f7-label>手机</f7-label>
					<f7-input name="phone" placeholder="手机号" type="text" @input="getName"></f7-input>
				</f7-list-item>
				<f7-list-item>
					<f7-label>密码</f7-label>
					<f7-input name="password" type="password" placeholder="密码" @input="getPassword"></f7-input>
				</f7-list-item>
			</f7-list>
			<f7-list>
				<f7-list-button title="登录" @click="signin"></f7-list-button>
				<f7-block-footer>
					点击 <a href="/binding">注册</a> 申请一个新账号。
				</f7-block-footer>
			</f7-list>
		</f7-page>
	</f7-view>
</f7-login-screen>
		
</template>

<script>
import axios from '../../../axios.js';

const $$ = Dom7;

export default {
  data() {
	  return {
		  account: {
			  name: [],
			  password: []
		  }
	  };
  },
  methods: {
	  signin() {
		 
		return axios.post(`app/account/session`, {
			name: this.account.name.join(''),
			password:  this.account.password.join('')
		}).then(res => {
			this.router.load('/index');
			console.log('successful!');
		}).catch(err => {
			console.log(err.message);
		})
	  },
	  getName(value) {
		  if (value.data) {
			  this.account.name.push(value.data);
		  } else {
			  this.account.name.pop();
		  }
	  },
	  getPassword(value) {
		  if (value.data) {
			  this.account.password.push(value.data);
		  } else {
			  this.account.password.pop();
		  }
	  },
  }
}
</script>

<style lang="less">
#login-screen {
	div.col {
		text-align: center;
	}
}
</style>

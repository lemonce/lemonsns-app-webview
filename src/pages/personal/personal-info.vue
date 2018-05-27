<template>
<f7-page name="personal-info">
	<f7-navbar title="个人信息" back-link></f7-navbar>

	<f7-list class="margin-top">
		<f7-list-item
			v-for="(info, index) in infoList"
			:key="index"
			:link="info.link"
			:title="info.title"
			:after="info.after"
		></f7-list-item>
	</f7-list>
</f7-page>
</template>

<script>
import axios from '../../../axios.js';

export default {
	name: 'personal-info',
	data() {
		return {
			infoList: [
				{
					link: '',
					title: '头像',
					after: ''
				},
				{
					link: '',
					title: '账号',
					after: '135xxxxxxxx'
				},
				{
					link: '',
					title: '手机',
					after: '135xxxxxxxx'
				},
				{
					link: '',
					title: '姓名',
					after: '张三'
				},
				{
					link: '',
					title: '性别',
					after: '男'
				},
				{
					link: '',
					title: '党派',
					after: '无党派'
				},
				{
					link: '',
					title: '民族',
					after: '汉族'
				},
				{
					link: '',
					title: '公司',
					after: 'xxxx组'
				},
			]
		}
	},
	methods: {
		getAccountInfo() {
			return axios.get(`app/account`)
				.then(res => {
					console.log(res.data.data);
				})
		}
	},
	mounted() {
		this.getAccountInfo();
	}
}
</script>

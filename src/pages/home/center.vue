<template>

<f7-page name="center">
	<f7-navbar :title="centerName" back-link></f7-navbar>

	<img src="../../images/home/slide4.jpg" width="100%">
	
	<f7-toolbar tabbar bottom-md>
		<f7-link tab-link
			v-if="centerTitle === 'news'"
			v-for="(category, index) in news.categoryList"
			:key="index"
			:text="category.name"
			:href="`#tab${index}`"
			style="font-size: 14px;"></f7-link>
		<f7-link tab-link
			v-if="centerTitle === 'culture'"
			v-for="(category, index) in culture.categoryList"
			:key="index"
			:text="category.name"
			:href="`#tab${index}`"
			style="font-size: 14px;"></f7-link>
		<f7-link tab-link
			v-if="centerTitle === 'personnel'"
			v-for="(category, index) in personnel.categoryList"
			:key="index"
			:text="category.name"
			:href="`#tab${index}`"
			style="font-size: 14px;"></f7-link>
		<f7-link tab-link
			v-if="centerTitle === 'courseSpirit'"
			v-for="(category, index) in courseSpirit.categoryList"
			:key="index"
			:text="category.name"
			:href="`#tab${index}`"
			style="font-size: 14px;"></f7-link>
		<f7-link tab-link
			v-if="centerTitle === 'courseUFWD'"
			v-for="(category, index) in courseUFWD.categoryList"
			:key="index"
			:text="category.name"
			:href="`#tab${index}`"
			style="font-size: 14px;"></f7-link>
		<f7-link tab-link
			v-if="centerTitle === 'mailbox'"
			v-for="(category, index) in mailbox.categoryList"
			:key="index"
			:text="category.name"
			:href="`#tab${index}`"
			style="font-size: 14px;"></f7-link>
	</f7-toolbar>

	<f7-tabs v-if="centerTitle === 'news'">
		<f7-tab id="tab0" tab-active>
			<tab-test></tab-test>
		</f7-tab>
		<f7-tab :id="`tab${index}`"
			v-for="(category, index) in news.categoryList"
			:key="index - 1">
			<tab-test></tab-test>
		</f7-tab>
	</f7-tabs>
	<f7-tabs v-if="centerTitle === 'culture'">
		<f7-tab id="tab0" tab-active>
			<tab-test></tab-test>
		</f7-tab>
		<f7-tab :id="`tab${index}`"
			v-for="(category, index) in culture.categoryList"
			:key="index - 1">
			<tab-test></tab-test>
		</f7-tab>
	</f7-tabs>
	<f7-tabs v-if="centerTitle === 'personnel'">
		<f7-tab id="tab0" tab-active>
			<tab-test></tab-test>
		</f7-tab>
		<f7-tab :id="`tab${index}`"
			v-for="(category, index) in personnel.categoryList"
			:key="index - 1">
			<tab-test></tab-test>
		</f7-tab>
	</f7-tabs>
	<f7-tabs v-if="centerTitle === 'courseSpirit'">
		<f7-tab id="tab0" tab-active>
			<tab-test></tab-test>
		</f7-tab>
		<f7-tab :id="`tab${index}`"
			v-for="(category, index) in courseSpirit.categoryList"
			:key="index - 1">
			<tab-test></tab-test>
		</f7-tab>
	</f7-tabs>
	<f7-tabs v-if="centerTitle === 'courseUFWD'">
		<f7-tab id="tab0" tab-active>
			<tab-test></tab-test>
		</f7-tab>
		<f7-tab :id="`tab${index}`"
			v-for="(category, index) in courseUFWD.categoryList"
			:key="index - 1">
			<tab-test></tab-test>
		</f7-tab>
	</f7-tabs>
	<f7-tabs v-if="centerTitle === 'mailbox'">
		<f7-tab id="tab0" tab-active>
			<tab-test></tab-test>
		</f7-tab>
		<f7-tab :id="`tab${index}`"
			v-for="(category, index) in mailbox.categoryList"
			:key="index - 1">
			<tab-test></tab-test>
		</f7-tab>
	</f7-tabs>
</f7-page>
</template>

<script>
import TabTest from './tab-test.vue';

const center = {
	news: '新闻中心',
	culture: '文化艺术',
	personnel: '人才中心',
	courseSpirit: '中央市委区委主要会议文件精神',
	courseUFWD: '学习统战知识',
	mailbox: '投递中心'
}
export default {
	name: 'center',
	components: {
		TabTest
	},
	data() {
		return {
			centerTitle: '',
			news: {
				categoryList: [
					{
						name: '多党合作'
					},
					{
						name: '民族宗教'
					},
					{
						name: '非公经济'
					},
					{
						name: '党外人才'
					},
					{
						name: '港澳台海'
					}
				]
			},
			culture: {
				categoryList: [
					{
						name: '文化小站'
					},
					{
						name: '艺术画廊'
					},
					{
						name: '精武精神'
					},
					{
						name: '西青故事'
					}
				]
			},
			personnel: {
				categoryList: [
					{
						name: '联络站'
					},
					{
						name: '争上游'
					},
					{
						name: '畅心声'
					},
					{
						name: '展示墙'
					}
				]
			},
			courseSpirit: {
				categoryList: [
					{
						name: '十九大精神'
					},
					{
						name: '十九大报告'
					},
					{
						name: '视频教学'
					},
					{
						name: '学习心得'
					}
				]
			},
			courseUFWD: {
				categoryList: [
					{
						name: '统战知识'
					},
					{
						name: '统战故事'
					},
					{
						name: '统战人物'
					}
				]
			},
			mailbox: {
				categoryList: [
					{
						name: '问计于民'
					},
					{
						name: '全部投稿'
					},
					{
						name: '提建议'
					},
					{
						name: 'APP反馈'
					}
				]
			},
		}
	},
	computed: {
		centerName() {
			this.centerTitle = this.$f7route.params.name;
			return center[this.centerTitle];
		}
	}
}
</script>

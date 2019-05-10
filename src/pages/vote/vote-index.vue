<template>

<f7-page name="questionnaire and vote">
	<f7-navbar title="问卷投票" back-link></f7-navbar>

	<f7-block-title class="margin-vertical">正在进行中</f7-block-title>
	<f7-list media-list class="margin-vertical">
		<f7-list-item
			title="[答题]xx 知识问答"
			link="/questionanswer"
			after="2019/05/01"></f7-list-item>
		<f7-list-item
			title="[投票]xx 投票-2"
			link="/vote"
			after="2018/03/14"></f7-list-item>
		<f7-list-item
			title="[问卷]xx 问卷-3"
			link="/questionnaire"
			after="2018/03/10"></f7-list-item>
	</f7-list>

	<f7-block-title class="margin-vertical">已结束</f7-block-title>
	<f7-list media-list class="margin-vertical">
		<f7-list-item
			title="[投票]xx 投票-1"
			link
			after="2018/01/29"></f7-list-item>
	</f7-list>

</f7-page>
</template>

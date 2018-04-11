<template>

<f7-page name="questionnaire">
	<f7-navbar title="xx 问卷" back-link></f7-navbar>

	<f7-block-title class="margin-top">规则</f7-block-title>
	<f7-block strong class="margin-vertical">
		<p>尊敬的先生/女士：您好！非常感谢您花时间完成这份问卷。我是内蒙古大学创业学院的一名学生，目前我正在对“网店售后服务对顾客忠诚度的影响研究”，以作为撰写毕业论文之用，希望了解您对网店售后服务的看法，以便开展其能更好地为售后服务。您的回答中没有正确或错误之分，希望您填写的问卷真实完整。此调查问卷是匿名发布的，您的一切回答只用于此次论文研究，绝不对外公开，请您放心填写。最后，再次真诚的谢谢您的配合！以进行更好的服务,我希望你填写问卷。 你所有的答案只用于本论文研究，并且不对公众开放。 请充满信心地填写。 最后，再次真诚地感谢</p>
	</f7-block>

	<f7-block-title class="margin-top">问题</f7-block-title>
	<f7-block-title class="margin-top">1.你最喜欢的是什么?</f7-block-title>
	<f7-list>
		<f7-list-item checkbox title="书" name="demo-checkbox" checked></f7-list-item>
		<f7-list-item checkbox title="电影" name="demo-checkbox"></f7-list-item>
		<f7-list-item checkbox title="食物" name="demo-checkbox"></f7-list-item>
		<f7-list-item checkbox title="饮料" name="demo-checkbox"></f7-list-item>
	</f7-list>

	<f7-block-title class="margin-top">2.你最喜欢的是什么?</f7-block-title>
	<f7-list>
		<f7-list-item>
			<f7-input type="textarea"></f7-input>
		</f7-list-item>
	</f7-list>

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill tab-link back>提交</f7-button>
			</f7-col>
		</f7-row>
	</f7-block>
	
</f7-page>
</template>

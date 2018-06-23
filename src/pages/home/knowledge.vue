<template>

<f7-page name="konwledge">
	<f7-navbar title="知识学习" back-link></f7-navbar>
	<!-- 目前弃用这个组件 -->
	<!-- <f7-list>
		<f7-list-item
			link="/center/courseSpirit"
			title="中央市委区委主要会议文件精神"></f7-list-item>
		<f7-list-item
			link="/center/courseUFWD"
			title="学习统战知识"></f7-list-item>
	</f7-list> -->
	<f7-card>
		<f7-card-content :padding="true">
			<img src="../../images/home/slide1.jpg" width="100%">
		</f7-card-content>
		<f7-card-footer>
			<f7-list>
				<f7-list-button color="black"
					href="/center/courseSpirit"
					title="中央市委区委主要会议文件精神">
				</f7-list-button>
			</f7-list>
		</f7-card-footer>
	</f7-card>
	<f7-card>
		<f7-card-content :padding="true">
			<img src="../../images/home/slide3.jpg" width="100%">
		</f7-card-content>
		<f7-card-footer>
			<f7-list>
				<f7-list-button color="black"
					href="/center/courseUFWD"
					title="学习统战知识">
				</f7-list-button>
			</f7-list>
		</f7-card-footer>
	</f7-card>
</f7-page>
</template>

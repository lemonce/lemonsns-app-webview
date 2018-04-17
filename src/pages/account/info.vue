<template>

<f7-page name="register-info" color-theme="red">
	<f7-navbar title="完善信息" back-link></f7-navbar>

	<f7-list form class="margin-top">
		<f7-list-item>
			<f7-label>姓名</f7-label>
			<f7-input name="name" placeholder="你的名字" type="text"></f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>公司</f7-label>
			<f7-input name="company" placeholder="你的公司" type="text"></f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>党派</f7-label>
			<f7-input name="party" type="select" placeholder="请选择 ...">
				<option value="">无党派</option>
				<option value="">中国共产党</option>
				<option value="">中国国民党</option>
				<option value="">中国民主同盟</option>
				<option value="">中国民主建国会</option>
				<option value="">中国民主促进会</option>
				<option value="">中国农民工人民主党</option>
				<option value="">中国致公党</option>
				<option value="">九三学社</option>
				<option value="">台湾民主自治联盟</option>
				<option value="">中华全国工商联合会</option>
			</f7-input>
		</f7-list-item>
	</f7-list>

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill tab-link href="/index/">欢迎使用</f7-button>
			</f7-col>
		</f7-row>
	</f7-block>
	
</f7-page>
</template>

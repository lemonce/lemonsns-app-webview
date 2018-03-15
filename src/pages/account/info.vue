<template>

<f7-page name="register-info">
	<f7-navbar title="Perfect infomation" back-link></f7-navbar>

	<f7-list form class="margin-top">
		<f7-list-item>
			<f7-label>Name</f7-label>
			<f7-input name="name" placeholder="Your name" type="text"></f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>Company</f7-label>
			<f7-input name="company" placeholder="Your company" type="text"></f7-input>
		</f7-list-item>
		<f7-list-item>
			<f7-label>Party</f7-label>
			<f7-input name="party" type="select" placeholder="Plese choose ...">
				<option value="">Nonparty</option>
				<option value="">CCP</option>
				<option value="">Chinese Kuomintang</option>
				<option value="">China Democratic League</option>
				<option value="">China Democratic National Construction Association</option>
				<option value="">China Association for Promoting Democracy</option>
				<option value="">Chinese Peasants’ and Worker’ Democratic Party</option>
				<option value="">China Zhi Gong Dang</option>
				<option value="">Jiusan Society</option>
				<option value="">Taiwan Democratic Self-Government League</option>
				<option value="">ACFIC</option>
			</f7-input>
		</f7-list-item>
	</f7-list>

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill tab-link href="/index">Welcome</f7-button>
			</f7-col>
		</f7-row>
	</f7-block>
	
</f7-page>
</template>

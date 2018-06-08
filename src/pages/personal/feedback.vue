<template>

<f7-page name="feedback">
	<f7-navbar title="反馈" back-link></f7-navbar>

	<f7-block-title class="margin-top">内容</f7-block-title>
	<f7-list>
		<f7-list-item>
			<f7-input type="textarea"
				:value="content"
				@input="content = $event.target.value"></f7-input>
		</f7-list-item>
	</f7-list>

	<f7-block inset>
		<f7-row>
			<f7-col width="100">
				<f7-button big fill tab-link
					@click="postFeedback()">提交</f7-button>
			</f7-col>
		</f7-row>
	</f7-block>

</f7-page>
</template>

<script>
import axios from '../axios.js';

export default {
	name: 'feedback',
	data() {
		return {
			content: ''
		}
	},
	methods: {
		postFeedback() {
			return axios.post('app/advise', {
				content: this.content
			}).then(() => {
				this.$f7router.back();
			})
		}
	}

}
</script>

<template>

<f7-page name="message-content">
	<f7-navbar title="Content" back-link></f7-navbar>

	<f7-messages ref="messages">
      <f7-messages-title><b>Sunday, Feb 9,</b> 12:58</f7-messages-title>
      <f7-message
	  	v-for="(message, index) in messagesData"
        :key="index"
        :type="message.type"
        :text="message.text"
        :image="message.image"
        :name="message.name"
        :avatar="message.avatar"
      ></f7-message>
    </f7-messages>
</f7-page>

</template>

<script>
export default {
	name: 'message-content',
	data() {
		return {
			messagesData: [
				{
					type: 'received',
					text: 'Hi, Kate',
				},
				{
					type: 'received',
					text: 'Hi, I am good!',
				}
			]
		}
	}
}
</script>

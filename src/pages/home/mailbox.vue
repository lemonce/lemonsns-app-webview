<template>

    <f7-page>
        <f7-navbar title="投递箱" back-link></f7-navbar>
        <f7-list form v-if="isLogin">
            <f7-list-item>
                <f7-label>标题</f7-label>
                <f7-input
                    type="text"
                    placeholder="输入标题"
                    :value="advise.title"
                    @input="advise.title = $event.target.value"/>
            </f7-list-item>
            <f7-list-item>
                <f7-label>类别</f7-label>
                <f7-input type="select" :value="advise.category"
                    @input="advise.category = $event.target.value">
                    <option v-for="(name, index) in category"
                        :key="index"
                        :value="name">{{name}}</option>
                </f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>内容</f7-label>
                <f7-input type="textarea" placeholder="输入内容"
                    :value="advise.content"
                    @input="advise.content = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-block inset class="action-area">
                <f7-row>
                    <f7-col>
                        <f7-button fill @click="createAdvise">投递</f7-button>
                    </f7-col>
                </f7-row>
            </f7-block>
            <f7-block v-if="fail">投递信息失败!</f7-block>
            <!-- <p style="color: red; text-align:center" >投递信息失败!</p> -->
        </f7-list>

        <login v-if="!isLogin"></login>
    </f7-page>
</template>

<script>
import axios from '../axios.js';
import Login from '../account/login';

export default {
	name: 'mailbox',
	data() {
		return {
			advise: {
                title: '',
                category: '建言献策',
                content: ''
            },
            category: [
                '建言献策', '提建议', '其他投稿', 'APP反馈'
            ],
            fail: false
		}
    },
    components: {
		Login
	},
	computed: {
		isLogin() {
			return this.$store.state.signedIn;
		}
	},
	methods: {
		createAdvise() {
            if (this.advise.title === '' || this.advise.content === '') {
                return;
            }

            return axios.post(`/app/advise`, this.advise).then(() => {
                this.$store.dispatch('openMessageBox',
                    {
                        content: '信息投递成功！',
                        type: '投递箱'
                    }
                );

                this.$f7router.navigate('/index/');
            }).catch(err => {
                this.fail = true;
            });
        }
	}
}
</script>
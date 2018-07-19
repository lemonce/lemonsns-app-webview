'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../pages/axios';

Vue.use(Vuex);

function setLocalStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

const store = new Vuex.Store({
	state: {
		signedIn: false,
		accountId: null,
		messageBox: {
			content: null,
			open: false,
			type: null
		},
		qr: {
			scanning: false
		}
	},
	actions: {
		signIn({ commit }, { name, password}) {
			return axios.post('app/account/session', {
				name, password
			}).then(({data}) => {
				commit('updateAccount', data.data.id);
			});
		},
		signOut({ commit }) {
			return axios.delete('app/account/session')
				.then(() => {
					commit('updateAccount');
				});
		},
		openMessageBox({commit}, {content, type}) {
			commit('openNotification', {content, type});

			setTimeout(() => {
				commit('closeNotification');
			}, 3000);
		},
		openQrcodeScanning({ commit }) {
			commit('setQRScanning', true);
			
			QRScanner.show();
			return new Promise((resolve, reject) => {
				QRScanner.scan(function displayContents(err, text){
					if(err){
						reject(err);
					} else {
						resolve(text);
					}
					
					commit('setQRScanning', false);
				});
			});
		},
		cancelQrcodeScanning({ commit }) {
			commit('setQRScanning', false);
			QRScanner.cancel();
			QRScanner.hide();
		}
	},
	mutations: {
		updateAccount(state, accountId = null) {
			state.accountId = accountId;
			state.signedIn = Boolean(accountId);
			const loginStatus = {
				accountId
			};

			setLocalStorage('loginStatus', loginStatus);
		},
		openNotification(state, {content, type}) {
			state.messageBox.content = content;
			state.messageBox.type = type;
			state.messageBox.open = true;
		},
		closeNotification(state) {
			state.messageBox.open = false;
		},
		setQRScanning(state, value) {
			state.qr.scanning = value;
		}
	}
});

export default store;
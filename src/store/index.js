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
		},
		browseHistory: {
			length: 10,
			stack: JSON.parse(localStorage.getItem('browseHistory')) || []
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
		addHistory({ commit }, article) {
			commit('pushBrowseHistory', article);
		},
		emptyHistory({commit}) {
			commit('emptyBrowserHistory');
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
			
			QRScanner.destroy();
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
		pushBrowseHistory(state, article) {
			const {length, stack} = state.browseHistory;
			const size = stack.length;

			if (size >= length) {
				stack.shift(size + 1 - length );
			}

			if (article) {
				stack.push(article);
			}

			setLocalStorage('browseHistory', stack);
		},
		emptyBrowserHistory() {
			setLocalStorage('browseHistory', []);
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
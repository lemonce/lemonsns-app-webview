'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../../axios';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		signedIn: false,
		accountId: null
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
		}
	},
	mutations: {
		updateAccount(state, accountId = null) {
			state.accountId = accountId;
			state.signedIn = Boolean(accountId);
		}
	}
});

export default store;
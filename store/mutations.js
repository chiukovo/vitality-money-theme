import Vue from 'vue'

export default {
  setRemember(state, { me, account, password, autoLogin }) {
    state.localStorage.remember.me = me
    state.localStorage.remember.autoLogin = autoLogin

    if (me || autoLogin) {
      state.localStorage.remember.account = account
      state.localStorage.remember.password = password
    }
  },
}
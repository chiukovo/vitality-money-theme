<template>
<div>
</div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  head() {
    return {
      htmlAttrs: {
         class: ''
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      ],
      script: [
      ],
      link: [
      ]
    }
  },
  data () {
    return {
      loading: true,
      account: '',
      password: '',
      rememberMe: '',
      type: 'b',
      dt_url: '',
      horse_url: '',
    }
  },
  mounted() {
    this.loading = false

    this.dt_url = process.env.NUXT_ENV_DT_URL
    this.horse_url = process.env.NUXT_ENV_HORSE_URL

    //remember data
    const remember = this.$store.state.localStorage.remember
    this.rememberMe = remember.me

    if (this.rememberMe) {
      this.account = remember.account
      this.password = remember.password
    }
  },
  methods: {
    async doLogin() {
      let _this = this

      if (this.account == '' || this.password == '') {
        alert('帳號或密碼不得為空', '注意!')
        return
      }

      this.loading = true

      await axios.post(process.env.NUXT_ENV_API_URL + "/validation", qs.stringify({
        LoginAccount: this.account,
        LoginPassword: this.password,
        LoginMobile: 0,
      }))
      .then(response => {
        const result = response.data

        if (result['Code'] <= 0) {
          alert(result['ErrorMsg'], '注意!')
          _this.loading = false
          return
        }

        //記住我
        _this.$store.commit('setRemember', {
          me: _this.rememberMe,
          account: _this.account,
          password: _this.password,
        })

        const params = '/go?UserID=' + result.UserId + '&UserToken=' + result.Token + '&ReturnURL=' + document.URL

        if (_this.type == 'b') {
          location.href = _this.horse_url + params
        } else {
          location.href = _this.dt_url + params
        }
      })
    }
  },
}
</script>
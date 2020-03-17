<template>
  <div class="modal modal-menu fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal-menu" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="font-weight-bold modal-title" id="modal-title"></h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
        </div>
        <div class="modal-body">
          <div class="modal1">
            <div v-for="item in items">
              <table class="item-table">
                <thead>
                  <tr>
                    <th :colspan="item.header.colspan" :rowspan="item.header.rowspan">{{ item.header.title }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="body in item.body">
                    <td v-for="detail in body" :colspan="detail.colspan" :rowspan="detail.rowspan">{{ strReplace(detail.content) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios'
import qs from 'qs'

export default {
  data () {
    return {
      items: [],
      target_type: '',
    }
  },
  props: ['menu_type'],
  watch: {
    menu_type(type) {
      this.target_type = type
      this.getData()
    }
  },
  mounted() {
    const _this = this

    $('.modal-menu').on('shown.bs.modal', function (event) {
      const type = $(event.relatedTarget).attr('data-field')
      const text = $(event.relatedTarget).text()
      $('#modal-title').text(text)

      if (_this.target_type != _this.menu_type || _this.target_type == '') {
        _this.target_type = type
        _this.items = []
        _this.getData()
      }
    })
  },
  methods: {
    getData() {
      const _this = this

      axios.post(process.env.NUXT_ENV_API_URL + "/get_file", qs.stringify({
        file: this.target_type,
      }))
      .then(response => {
        _this.items = response.data
      })
    },
    strReplace(str) {
      return str.replace('</td>', '')
    }
  }
}
</script>
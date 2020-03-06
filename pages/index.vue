<template lang='pug'>
Horse(v-if="type == 'HORSE'")
TT2(v-else-if="type == 'TT2'")
</template>

<script>
import Horse from '~/components/Horse'
import TT2 from '~/components/TT2'

export default {
	data () {
	  return {
			type: 'HORSE',
	  }
	},
  components: {
    Horse,
    TT2,
  },
	created() {
    this.type = process.env.NUXT_ENV_TYPE
	},
  methods: {
  },
}
</script>
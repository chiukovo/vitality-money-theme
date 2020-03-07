<template lang='pug'>
Theme
</template>

<script>

export default {
	data () {
	  return {
			type: 'HORSE',
	  }
	},
  components: {
  	Theme: () => {
      if (process.env.NUXT_ENV_TYPE == 'TT2') {
        return import('@/componentS/TT2.vue')
      } else if (process.env.NUXT_ENV_TYPE == 'DT') {
      	return import('@/componentS/DT.vue')
      } else {
      	return import('@/componentS/Horse.vue')
      }
    }
  },
	created() {
    this.type = process.env.NUXT_ENV_TYPE
	},
  methods: {
  },
}
</script>
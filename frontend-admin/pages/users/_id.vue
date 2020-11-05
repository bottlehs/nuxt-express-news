<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6"> users id {{ id }} </v-col>
  </v-row>
</template>

<script>
import UsersService from '@/services/users.service.js'

export default {
  layout: 'dashboard',

  middleware: 'auth',

  components: {},

  props: {},

  fetch(context) {
    console.log(context + 'page fetch')
  },

  asyncData(context) {
    console.log(context + 'page asyncData')
  },

  data() {
    return {
      id: this.$route.params.id,
      wait: false,
    }
  },
  fetchOnServer: false,

  validate(context) {
    console.log(context + 'page validate')
    return true
  },

  computed: {},

  watch: {},

  beforeCreate() {},

  created() {},

  beforeMount() {
    this.fetch()
  },

  mounted() {},

  updated() {},

  destroyed() {},

  methods: {
    fetch() {
      if (!this.wait) {
        this.wait = true

        UsersService.findOne(this.$axios, this.id).then(
          (response) => {
            const { data } = response
            console.log(data)

            this.wait = false
          },
          (error) => {
            console.log(error)

            this.wait = false
          }
        )
      }
    },
  },

  head() {
    return {
      title: 'title',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
}
</script>

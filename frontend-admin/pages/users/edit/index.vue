<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6"> users edit </v-col>
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
      pagenation: {
        totalItems: 0,
        items: [],
        totalPages: 0,
        currentPage: 0,
        wait: false,
      },
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

  beforeMount() {},

  mounted() {},

  updated() {},

  destroyed() {},

  methods: {
    submit() {
      console.log(UsersService)
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

<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h2>유저</h2>
      <v-btn @click="add">추가</v-btn>
      <v-data-table
        :headers="table.headers"
        :items="table.items"
        :items-per-page="pagenation.perPage"
        class="elevation-1"
      ></v-data-table>
    </v-col>
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
      table: {
        headers: [
          { text: 'email', value: 'email' },
          { text: 'username', value: 'username' },
          { text: 'firstname', value: 'firstname' },
          { text: 'lastname', value: 'lastname' },
          { text: 'languege', value: 'languege' },
          { text: 'country', value: 'country' },
          { text: 'createdAt', value: 'createdAt' },
        ],
        items: [],
      },

      pagenation: {
        totalItems: 0,
        totalPages: 0,
        currentPage: 0,
        perPage: 10,
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

  beforeMount() {
    this.fetch()
  },

  mounted() {},

  updated() {},

  destroyed() {},

  methods: {
    add() {
      this.$router.push(`/users/edit`)
    },
    fetch() {
      if (!this.pagenation.wait) {
        this.pagenation.wait = true

        const params = {}
        UsersService.findAll(this.$axios, params).then(
          (response) => {
            const { data } = response
            this.table.items = data.items
            this.pagenation.totalItems = data.totalItems
            this.pagenation.totalPages = data.totalPages
            this.pagenation.currentPage = data.currentPage
            this.pagenation.wait = false
          },
          (error) => {
            alert(error)

            this.pagenation.wait = false
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

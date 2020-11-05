<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      posts
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
import PostsService from '@/services/posts.service.js'

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
        headers: [],
        items: [],
      },

      pagenation: {
        totalItems: 0,
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

  beforeMount() {
    this.fetch()
  },

  mounted() {},

  updated() {},

  destroyed() {},

  methods: {
    fetch() {
      if (!this.pagenation.wait) {
        this.pagenation.wait = true

        const params = {}
        PostsService.findAll(this.$axios, params).then(
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

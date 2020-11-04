<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6"> faqs </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'dashboard',

  components: {},

  props: {},

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

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  updated() {},

  destroyed() {},

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

<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6"> faqs edit id {{ id }} </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'dashboard',

  components: {},

  props: {},

  data() {
    return {
      id: this.$route.params.id,
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

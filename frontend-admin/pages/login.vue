<template>
  <v-row justify="center" align="center">
    <form method="post" @submit.prevent="register">
      <div class="field">
        <label class="label">email</label>
        <div class="control">
          <input
            v-model="form.email"
            type="text"
            class="input"
            name="email"
            required
          />
        </div>
      </div>

      <div class="field">
        <label class="label">password</label>
        <div class="control">
          <input
            v-model="form.password"
            type="text"
            class="input"
            name="password"
            required
          />
        </div>
      </div>

      <div class="control">
        <button type="submit" class="button is-dark is-fullwidth">Login</button>
      </div>
    </form>
    <button @click.prevent="logout">logout</button>
  </v-row>
</template>

<script>
export default {
  layout: 'dashboard',

  middleware: 'guest',

  components: {},

  props: {},

  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  updated() {},

  destroyed() {},

  methods: {
    async logout() {
      await this.$auth.logout()
    },
    async register() {
      try {
        /*
        await this.$axios.post('register', {
          name: 'name',
          email: this.form.email,
          password: this.form.password,
        })

        await this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password,
          },
        })

        this.$router.push('/')
        */

        await this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password,
          },
        })
      } catch (e) {
        console.log(e)
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

<template>
  <div class="email">
    <h1>Email</h1>
    <input
      v-model="email"
      type="email"
      class="input"
    >
    <button
      @click="sendEmail"
      class="button button--primary"
    >
      Email
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    sendEmail () {
      this.$store.dispatch('tasks/sendEmail', this.email)
    }
  }
}
</script>

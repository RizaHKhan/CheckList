<template>
  <button
    @click="cancelUpdate"
    class="button button--secondary"
  >
    Cancel
  </button>
</template>

<script>
export default {
  methods: {
    cancelUpdate () {
      this.$emit('cancelUpdate')
    }
  }
}
</script>

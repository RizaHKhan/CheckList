<template>
  <button
    @click="approveUpdate"
    class="button button--primary"
  >
    Approve
  </button>
</template>

<script>
export default {
  methods: {
    approveUpdate () {
      this.$emit('approveUpdate')
    }
  }
}
</script>

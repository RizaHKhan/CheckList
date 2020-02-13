<template>
  <button
    @click="updateTaskMethod"
    class="button button--success"
  >
    Update
  </button>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    updateTaskMethod () {
      this.$emit('showInput')
    }
  }
}
</script>

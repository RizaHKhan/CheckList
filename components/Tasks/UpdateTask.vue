<template>
  <div class="adjust">
    <input
      v-on:approveUpdate="updateTask"
      :value="description"
      type="text"
    >
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true
    }
  },
  methods: {
    updateTask () {
      console.log('task updated')
    }
  }
}
</script>

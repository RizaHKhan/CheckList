<template>
  <div class="adjust">
    <input
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
  }
}
</script>

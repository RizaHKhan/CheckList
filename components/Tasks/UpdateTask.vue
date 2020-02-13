<template>
  <div class="adjust">
    <input type="text" :value="description">
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

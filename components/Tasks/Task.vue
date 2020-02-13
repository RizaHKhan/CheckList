<template>
  <div class="task">
    {{ task.description }}
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: String,
      required: true
    }
  }
}
</script>

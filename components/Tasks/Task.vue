<template>
  <div class="task">
    {{ task.description }}<DeleteButton :id="task._id" />
  </div>
</template>

<script>
import DeleteButton from '@/components/Buttons/DeleteButton'
export default {
  components: {
    DeleteButton
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>

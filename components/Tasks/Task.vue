<template>
  <div class="task">
    <h4 class="task__description">{{ task.description }}</h4><DeleteButton :id="task._id" /><UpdateButton />
  </div>
</template>

<script>
import DeleteButton from '@/components/Buttons/DeleteButton'
import UpdateButton from '@/components/Buttons/UpdateButton'
export default {
  components: {
    DeleteButton,
    UpdateButton
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>

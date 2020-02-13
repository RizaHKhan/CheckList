<template>
  <div class="task">
    <h4
      v-if="show"
      class="task__description"
    >
      {{ task.description }}
    </h4>
    <UpdateTask
      v-else
    />
    <DeleteButton
      :id="task._id"
    />
    <UpdateButton
      :id="task._id"
      @click="show = !show"
    />
  </div>
</template>

<script>
import DeleteButton from '@/components/Buttons/DeleteButton'
import UpdateButton from '@/components/Buttons/UpdateButton'
import UpdateTask from '@/components/Tasks/UpdateTask'
export default {
  components: {
    DeleteButton,
    UpdateButton,
    UpdateTask
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      show: true
    }
  }
}
</script>

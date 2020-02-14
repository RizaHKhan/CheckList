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
      :task="task"
    />
    <DeleteButton
      v-if="show"
      :id="task._id"
    />
    <UpdateButton
      v-on:showInput="showInput"
      v-if="show"
      :id="task._id"
    />
    <CancelUpdateButton
      v-if="!show"
      v-on:cancelUpdate="showInput"
    />
  </div>
</template>

<script>
import DeleteButton from '@/components/TaskButtons/DeleteButton'
import UpdateButton from '@/components/TaskButtons/UpdateButton'
import CancelUpdateButton from '@/components/TaskButtons/CancelUpdateButton'
import UpdateTask from '@/components/Tasks/UpdateTask'

export default {
  components: {
    DeleteButton,
    UpdateButton,
    UpdateTask,
    CancelUpdateButton
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
  },
  methods: {
    showInput () {
      this.show = !this.show
    }
  }
}
</script>

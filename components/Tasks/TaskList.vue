<template>
  <div v-if="tasks" class="list">
    <Task v-for="task in tasks" v-bind:key="task._id" :task="task" />
  </div>
</template>
<script>
import Task from '@/components/Tasks/Task'
export default {
  components: {
    Task
  },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>

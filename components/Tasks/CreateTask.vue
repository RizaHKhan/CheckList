<template>
  <div class="create">
    <input
      v-model="task"
      type="text"
    >
    <button
      @click="addTasks(task)"
      class="button button--create"
    >
      Create Task
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      task: ''
    }
  },
  methods: {
    ...mapActions({
      addTasks: 'tasks/addTasks'
    })
  }
}
</script>

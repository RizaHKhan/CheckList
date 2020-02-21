<template>
  <div class="create">
    <input
      v-model="task"
      type="text"
      class="input input--create"
      placeholder="Add Task Here"
    >
    <button
      @click="addTaskMethod"
      class="button button--success"
    >
      Create Task
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      task: '',
      error: ''
    }
  },
  methods: {
    addTaskMethod () {
      if (this.task) {
        this.$store.dispatch('tasks/addTasks', this.task)
        this.task = ''
      } else {
        this.$notify({
          group: 'global',
          title: 'Task cannot be blank',
          type: 'warn'
        })
      }
    }
  }
}
</script>

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
      task: ''
    }
  },
  methods: {
    addTaskMethod () {
      this.$store.dispatch('tasks/addTasks', this.task)
      this.task = ''
    }
  }
}
</script>

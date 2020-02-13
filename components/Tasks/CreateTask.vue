<template>
  <div class="create">
    <input
      v-model="task"
      type="text"
    >
    <button
      @click="addTaskMethod"
      class="button button--create"
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

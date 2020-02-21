<template>
  <div
    class="main-container--index"
  >
    <div
      class="main-container--index__tasks"
    >
      <CreateTask />
      <TaskList :tasks="tasks" />
    </div>
    <div
      class="main-container--index__notes"
    >
      <h1>Notes</h1>
    </div>
    <div
      class="main-container--index__archieve"
    >
      <h1>Archieve</h1>
      <button
        @click="showError"
      >
        Error
      </button>
    </div>
  </div>
</template>

<script>
import TaskList from '@/components/Tasks/TaskList'
import CreateTask from '@/components/Tasks/CreateTask'
import { mapGetters } from 'vuex'
export default {
  components: {
    TaskList,
    CreateTask
  },
  computed: {
    ...mapGetters({
      tasks: 'tasks/getTasks'
    })
  },
  created () {
    try {
      this.$store.dispatch('tasks/getTasks')
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    showError () {
      this.showLoginErrors()
    }
  },
  notifications: {
    showLoginErrors: {
      title: 'Login Failed',
      message: 'Failed to authenticate',
      type: 'error'
    }
  }
}
</script>

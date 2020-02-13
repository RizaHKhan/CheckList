<template>
  <div class="index">
    <CreateTask />
    <TaskList :tasks="tasks" />
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
  }
}
</script>

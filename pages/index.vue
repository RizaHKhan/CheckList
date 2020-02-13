<template>
  <div class="index">
    <h1>Todos</h1>
    <TaskList :tasks="tasks" />
  </div>
</template>

<script>
import TaskList from '@/components/Tasks/TaskList'
import { mapGetters } from 'vuex'
export default {
  components: {
    TaskList
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

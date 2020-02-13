<template>
  <button
    @click="deleteTask(id)"
    class="button button--update"
  >
    Update
  </button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions({
      updateTask: 'tasks/updateTask'
    })
  }
}
</script>

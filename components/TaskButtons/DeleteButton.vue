<template>
  <button
    @click="deleteTask(id)"
    class="button button--danger"
  >
    Delete
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
      deleteTask: 'tasks/deleteTask'
    })
  }
}
</script>

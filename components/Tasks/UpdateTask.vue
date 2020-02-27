<template>
  <div class="update">
    <input
      v-model="newDesc"
      type="text"
      class="input"
    >
    <ApproveUpdateButton
      v-on:approveUpdate="updateTask"
    />
  </div>
</template>

<script>
import ApproveUpdateButton from '@/components/TaskButtons/ApproveUpdateButton'
export default {
  components: {
    ApproveUpdateButton
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      newDesc: this.task.description
    }
  },
  methods: {
    updateTask () {
      this.$store.dispatch('tasks/updateTask', { _id: this.task._id, description: this.newDesc })
    }
  }
}
</script>

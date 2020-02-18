<template>
  <div class="categories">
    <h1 class="categories__header">
      Categories
    </h1>
    <div class="categories__content">
      <input
        v-model="category"
        type="text"
      >
      <button
        @click="addCategory(category)"
        class="button button--success"
      >
        Add category
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      category: ''
    }
  },
  methods: {
    ...mapActions({
      addCategory: 'category/addCategory'
    })
  }
}
</script>

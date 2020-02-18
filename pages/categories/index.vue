<template>
  <div class="categories">
    <h1 class="categories__header">
      Categories
    </h1>
    <div class="categories__content">
      <input
        v-model="category"
        type="text"
        class="input"
      >
      <button
        @click="addCategory(category)"
        class="button button--success"
      >
        Add category
      </button>
      <CategoryList />
    </div>
  </div>
</template>

<script>
import CategoryList from '@/components/Categories/CategoryList'
import { mapActions } from 'vuex'
export default {
  components: {
    CategoryList
  },
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

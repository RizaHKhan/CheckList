<template>
  <ul
    v-if="getCategories"
    class="category-list"
  >
    <li
      v-for="category in getCategories"
      :key="category.category._id"
      class="category-list__li"
    >
      <p
        class="category-list__li__p"
      >
        {{ category.category }}
      </p>
      <button
        @click="deleteCategory(category._id)"
        class="button button--danger"
      >
        Delete
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      show: false
    }
  },
  computed: {
    ...mapGetters({
      getCategories: 'category/getCategories'
    })
  },
  created () {
    this.$store.dispatch('category/getCategories')
  },
  methods: {
    ...mapActions({
      deleteCategory: 'category/deleteCategory'
    })
  }
}
</script>

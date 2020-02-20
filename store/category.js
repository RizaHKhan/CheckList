import axios from 'axios'

export const state = () => ({
  categories: []
})

export const getters = {
  getCategories: state => state.categories
}

export const mutations = {
  emptyCategories (state) {
    state.categories = []
  },
  addCategory (state, category) {
    state.categories.push(category)
  },
  deleteCategory (state, _id) {
    state.categories.forEach((category) => {
      if (category._id === _id) {
        state.categories.splice(state.categories.indexOf(category), 1)
      }
    })
  }
}

export const actions = {
  async addCategory (ctx, category) {
    try {
      const response = await axios.post('/crud/addCategory', { category })
      ctx.commit('addCategory', response.data)
    } catch (err) {
      console.log(err)
    }
  },
  async getCategories (ctx) {
    ctx.commit('emptyCategories')
    try {
      const response = await axios.get('/crud/getCategories')
      Object.entries(response.data).forEach((category) => {
        ctx.commit('addCategory', category[1])
      })
    } catch (err) {
      console.log(err)
    }
  },
  async deleteCategory (ctx, _id) {
    try {
      await axios.post('/crud/deleteCategory', { _id })
      ctx.commit('deleteCategory', _id)
    } catch (err) {
      console.log(err)
    }
  }
}

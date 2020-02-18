import axios from 'axios'

export const state = () => ({
  categories: []
})

export const getters = {
  getCategories: state => state.categories
}

export const mutations = {

}

export const actions = {
  async addCategory (ctx, category) {
    try {
      await axios.post('/crud/addCategory', { category })
    } catch (err) {
      console.log(err)
    }
  }
}

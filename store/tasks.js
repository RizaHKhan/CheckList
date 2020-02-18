import axios from 'axios'

export const state = () => ({
  tasks: [],
  errors: []
})

export const getters = {
  getTasks: state => state.tasks
}

export const mutations = {
  getTasks (state, tasks) {
    if (tasks.length) {
      Object.values(tasks).forEach((task) => {
        state.tasks.push(task)
      })
    } else {
      state.tasks = []
    }
  },
  errors (state, error) {
    state.tasks.push(error)
  }
}

export const actions = {
  async addTasks (ctx, payload) {
    try {
      await axios.post('/crud/addTasks', { description: payload })
      ctx.dispatch('getTasks')
    } catch (err) {
      ctx.commit('errors', err)
    }
  },
  async getTasks (ctx) {
    try {
      ctx.commit('getTasks', '')
      const tasks = await axios.get('/crud/getTasks')
      ctx.commit('getTasks', tasks.data)
    } catch (err) {
      ctx.commit('errors', err)
    }
  },
  async deleteTask (ctx, id) {
    try {
      await axios.post('/crud/deleteTask', { id })
      ctx.dispatch('getTasks')
    } catch (err) {
      ctx.commit('errors', err)
    }
  },
  async updateTask (ctx, task) {
    try {
      await axios.post('/crud/updateTask', { task })
      ctx.dispatch('getTasks')
    } catch (err) {
      ctx.commit('errors', err)
    }
  },
  async sendEmail (ctx, email) {
    try {
      await axios.post('/crud/sendEmail', { email })
    } catch (err) {
      console.log(err)
    }
  }
}

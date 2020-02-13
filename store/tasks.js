import axios from 'axios'

export const state = () => ({
  tasks: []
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
  }
}

export const actions = {
  async addTasks (ctx, payload) {
    try {
      await axios.post('http://localhost:3000/crud/addTasks', { description: payload })
      ctx.dispatch('getTasks')
    } catch (err) {
      console.log(err)
    }
  },
  async getTasks (ctx) {
    try {
      ctx.commit('getTasks', '')
      const tasks = await axios.get('http://localhost:3000/crud/getTasks')
      ctx.commit('getTasks', tasks.data)
    } catch (err) {
      console.log(err)
    }
  },
  async deleteTask (ctx, id) {
    try {
      await axios.post('http://localhost:3000/crud/deleteTask', { id })
      ctx.dispatch('getTasks')
    } catch (err) {
      console.log(err)
    }
  },
  updateTask (ctx, task) {
    console.log(task)
    try {
      axios.post('http://localhost:3000/crud/updateTask', { task })
      ctx.dispatch('getTasks')
    } catch (err) {
      console.log(err)
    }
  }
}

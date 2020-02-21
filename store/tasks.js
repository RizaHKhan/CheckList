import Vue from 'vue'
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
      await axios.post('/crud/addTasks', { description: payload })
      ctx.dispatch('getTasks')
    } catch (err) {
      Vue.notify({
        group: 'global',
        title: 'Task Not Added',
        text: err,
        type: 'error'
      })
    }
  },
  async getTasks (ctx) {
    try {
      ctx.commit('getTasks', '')
      const tasks = await axios.get('/crud/getTasks')
      ctx.commit('getTasks', tasks.data)
    } catch (err) {
      Vue.notify({
        group: 'global',
        title: 'Unable To Retrieve Tasks',
        text: err
      })
    }
  },
  async deleteTask (ctx, id) {
    try {
      await axios.post('/crud/deleteTask', { id })
      ctx.dispatch('getTasks')
      Vue.notify({
        group: 'global',
        title: 'Task Deleted'
      })
    } catch (err) {
      Vue.notify({
        group: 'global',
        title: 'Unable To Delete Task',
        text: err,
        type: 'error'
      })
    }
  },
  async updateTask (ctx, task) {
    try {
      await axios.post('/crud/updateTask', { task })
      ctx.dispatch('getTasks')
    } catch (err) {
      Vue.notify({
        group: 'global',
        title: 'Unable To Update Task',
        text: err,
        type: 'error'
      })
    }
  },
  async sendEmail (ctx, email) {
    try {
      await axios.post('/crud/sendEmail', { email })
    } catch (err) {
      Vue.notify({
        group: 'global',
        title: 'Unable To Send Email',
        type: 'error'
      })
    }
  }
}

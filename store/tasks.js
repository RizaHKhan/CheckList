import axios from 'axios'

export const state = () => ({
  tasks: []
})

export const getters = {
  getTasks: state => state.tasks
}

export const mutations = {
  getTasks (state, tasks) {
    Object.values(tasks).forEach((task) => {
      state.tasks.push(task)
    })
    console.log(state.tasks)
  }
}

export const actions = {
  async addTasks (ctx, payload) {
    try {
      await axios.post('/crud/addTasks', payload)
      console.log('Items added')
    } catch (err) {
      console.log(err)
    }
  },
  async getTasks (ctx) {
    try {
      const tasks = await axios.get('/crud/getTasks')
      ctx.commit('getTasks', tasks.data)
    } catch (err) {
      console.log(err)
    }
  }
}

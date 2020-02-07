<template>
  <div class="home">
    <h1>Checklist</h1>
    <div class="add">
      <form action="#">
        <input type="text" v-model="task.description">
        <input type="submit" value="Add Task" @click="addTasks(task)">
      </form>
    </div>
    <div class="list">
      <ul v-if="getTasks">
        <li class="list-item" v-for="{description, id} in getTasks" v-bind:key='id'>
          <p>{{ description }}</p><button>Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      task: {
        description: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      getTasks: 'tasks/getTasks'
    })
  },
  created () {
    this.$store.dispatch('tasks/getTasks')
  },
  methods: {
    ...mapActions({
      addTasks: 'tasks/addTasks'
    })
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
    font-weight: 400;
    margin: 10px 0;
  }

  .list ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-gap: 10px;
  }

  .list ul li {
    list-style: none;
    margin: 0;
  }

  .home {
    display: grid;
    grid-gap: 10px;
  }

  .list-item {
    display: flex;
    justify-content: space-between;
  }

  .list-item p {
    margin: auto 0;
  }

  .list-item button {
    border: 0;
    text-decoration: none;
    background: rgba(0, 144, 193, 1);
    padding: 5px;
    border-radius: 5px;
    transition: all .5s ease;
    color: black;
    font-weight: 400;
  }

  .list-item button:hover {
    color: white;
  }
</style>

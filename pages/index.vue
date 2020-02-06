<template>
  <div class="home">
    <h1>Checklist</h1>
    <div class="add">
      <form action="#">
        <input type="text">
        <input type="submit" value="Add Task">
      </form>
    </div>
    <div class="list">
      <ul>
        <li class="list-item"><p>Feed the dog</p><a href="#">Delete</a></li>
        <li class="list-item"><p>Buy Food</p><a href="#">Delete</a></li>
        <li class="list-item"><p>Buy Food and do other things</p><a href="#">Delete</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  h1 {
    text-align: center;
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
</style>

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

  .list-item a {
    text-decoration: none;
    background: rgba(0, 144, 193, 1);
    padding: 5px;
    border-radius: 5px;
    transition: all .5s ease;
    color: black;
    font-weight: 400;
  }

  .list-item a:hover {
    color: white;
  }
</style>

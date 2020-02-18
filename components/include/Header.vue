<template>
  <div class="main-container--header">
    <div class="main-container--header__title">
      <nuxt-link
        to="/"
        class="main-container--header__title__link"
      >
        <h1
          class="main-container--header__title__link__h1"
        >
          CheckList
        </h1>
      </nuxt-link>
      <p class="main-container--header__title__p">
        The most effective productivity tool
      </p>
    </div>
    <div class="main-container--nav">
      <nuxt-link
        to="/email"
        class="button button--primary"
      >
        Email
      </nuxt-link>
      <nuxt-link
        to="/categories"
        class="button button--primary"
      >
        Categories
      </nuxt-link>
    </div>
  </div>
</template>

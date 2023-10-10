<template>
  <div class="app">
    <!-- <header class="header">
      <router-link :to="{path: '/'}" class="header__link">
        <h1>Star Wars people list</h1>
      </router-link> -->
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link>
      </nav>
    <!-- </header> -->
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  // background: #000;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}
.header {
  text-align: center;
  text-transform: uppercase;
  &__link {
    color: #fcd711;
    text-decoration: none;
  }
}
</style>

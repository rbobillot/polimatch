<template>
  <header class="top-bar">
    <div class="title">
      <span>Polimatch</span>
    </div>
    <nav>
      <RouterLink active-class="active-home" to="/">Accueil</RouterLink>
      <RouterLink active-class="active-matching" to="/matching">Matching</RouterLink>
    </nav>
    <a href="https://github.com/rbobillot/polimatch" title="Fork me on GitHub">
      <img class="github-icon" src="../assets/github-mark.png" />
    </a>
  </header>
  <main>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>

.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  // width: calc(100% - 17px); /* Adjusted to account for scrollbar width */
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  z-index: 1000;
}

.top-bar .title span {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--french-red);
}

.github-icon {
  width: 30px;
  height: 30px;
  padding-right: 3rem;
}

nav {
  display: flex;
  // gap: 1rem;
}

nav a {
  display: inline-block;
  padding: 0.4rem 0.7rem;
  text-decoration: none;
  color: black;
  border-radius: 5%;
}

main {
  padding-top: 1.5rem; /* Adjust this value according to the height of your top-bar */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.active-home {
  background-color: var(--french-blue);
  transition: ease-in-out;
  transition-duration: 1s;
  color: white;
}

.active-matching {
  background-color: var(--french-red);
  transition: ease-in-out;
  transition-duration: 1s;
  color: white;
}

.github-icon img {
  width: 24px;
  height: 24px;
}
</style>

<template>
  <nav>
    <RouterLink active-class="active-home" to="/">Accueil</RouterLink>
    <RouterLink active-class="active-matching" to="/matching">Matching</RouterLink>
  </nav>
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

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

nav a {
  display: inline-block;
  padding: 0.4rem 0.7rem;
  text-decoration: none;
  color: black;
  border-radius: 5%;
}
</style>

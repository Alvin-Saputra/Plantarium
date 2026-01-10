<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue';
import { ref } from 'vue';

const activeMenu = ref('home');
</script>

<template>
  <v-app>

    <NavigationBar :active="activeMenu" @update-active="(val) => activeMenu = val" class="nav mt-8" />
    <RouterView />
  </v-app>
</template>

<style lang="scss" scoped>
.nav {
  font-family: 'Google Sans', sans-serif;
  font-weight: 500;
}
</style>

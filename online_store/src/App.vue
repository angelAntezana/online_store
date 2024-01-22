<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="">
      <nav class="flex
      justify-center
      items-center
      gap-8
      p-6
    bg-gray-800
    text-white
      text-center">
        <RouterLink class="w-24 bg-red-700" to="/">Home</RouterLink>
        <RouterLink class="w-24 bg-red-700" to="/store">Store</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style scoped>
.custom-nav {
  background-color: red;
  width: 100%;
  height: 100px;
  padding: 20px 20px;
}
</style>

<script setup lang="ts">
const isNotHome = useRoute().path !== '/'
</script>

<template>
  <main class="container mx-auto">
    <slot />
    <div class="text-sm mx-auto mt-5 text-center opacity-25">
      <NuxtLink v-if="isNotHome" to="/">
        Home
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
defineProps<{
  variant: 'primary' | 'secondary' | 'tertiary'
}>()
</script>

<template>
  <div class="bg-primary-500 text-white p-4 rounded-md shadow-md">
    <slot />
  </div>
</template>

<style scoped></style>
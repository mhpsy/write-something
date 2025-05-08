<script setup lang="ts">
defineProps<{
  variant: 'primary' | 'secondary' | 'tertiary'
}>()
</script>

<template>
  <div class="p-4 rounded-md shadow-md">
    <slot />
  </div>
</template>

<style scoped></style>

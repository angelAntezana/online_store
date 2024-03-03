<template>
  <button
    type="button"
    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    @click="$emit('click')"
    :class="style"
    >
    {{ description }}
  </button>
</template>

<script setup>
const props = defineProps({
  description: {
    type: String,
    required: false
  },
  style: {
    type: String,
    required: false,
    default: 'bg-cyan-700 text-white'
  }
})
</script>

<style lang="scss" scoped></style>

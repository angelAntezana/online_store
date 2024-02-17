<template>
    <button @click="$emit('click')" :class="style">
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
        required:false,
        default: "bg-cyan-700 text-white"
    }
})
</script>

<style lang="scss" scoped>

</style>
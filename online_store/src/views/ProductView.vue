<template>
    <div>
        {{ id }}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

let id = route.params.id;
</script>

<style lang="scss" scoped>

</style>
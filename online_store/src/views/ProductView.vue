<template>
    <div>
        {{ id }}
    </div>
    <div>
        <button @click="getProduct(id)">
            Click para ver producto.
        </button>
        <p v-if="exito">
            {{ store.product }}
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/productsFromApi';

const route = useRoute();
const store = useProductStore();

let exito = ref(false);
let id = route.params.id;
async function getProduct (idProduct) {
    await store.getProduct(idProduct);
    exito.value = true;
}
</script>

<style lang="scss" scoped>

</style>
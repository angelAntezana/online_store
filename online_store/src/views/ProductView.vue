<template>
    <div>
        {{ id }}
    </div>
    <div>
        <button @click="getProduct(id)">
            Click para ver producto.
        </button>
        <ProductCard v-if="exito"
            :brand="store.product.brand"
            :category="store.product.category"
            :description="store.product.description"
            :thumbnail="store.product.thumbnail"
            :price="store.product.price"
            :rating="store.product.rating"
            :title="store.product.title"
        >

        </ProductCard>
    </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue';
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
<template>
    <div>
        <!-- {{ id }} -->
        <!-- <button @click="getProduct(id)">
            Click para ver producto.
        </button> -->
        <!-- <ButtonComponent @click="getProduct(id)" :style="style" :description="store.product.title"> -->

        <!-- </ButtonComponent> -->
        <ButtonComponent @click="updateProduct(id)" :description="'Actualizar producto'"/>
    </div>
    <div class="flex justify-center items-center">
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
import ButtonComponent from '@/components/ButtonComponent.vue';
import ProductCard from '@/components/ProductCard.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/productsFromApi';

const route = useRoute();
const store =  useProductStore();
// const style= "bg-teal-600";
let exito = ref(false);
let id = route.params.id;
async function getProduct (idProduct) {
    await store.getProduct(idProduct);
    exito.value = true;
}

function updateProduct(idProduct) {
    const objProduct = {
        title: "DE PRUEBA"
    }
    store.putProduct(idProduct, objProduct);
}

onMounted(() => {
    getProduct(id);
})
</script>

<style lang="scss" scoped>

</style>
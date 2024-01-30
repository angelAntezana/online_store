<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '../stores/productsFromApi';

let arrayProducts = ref([]);
let columns = ref([]);
let router = useRouter();
const store = useProductStore()
const allProducts = (async ()=>{
  await store.getAllProducts();
  // await serviceProducts.getAllProducts()
    // .then(res=>{
    //   for(let i = 0; i< res.data.products.length; i++) {
    //     arrayProducts.value.push(res.data.products[i]);
    //   }
    //   let prueba = Object.keys(arrayProducts.value[2]);
    //   for(let z = 0; z < prueba.length; z++) {
    //     columns.value.push(prueba[z]);
    //   }
    //   console.log(res.data.products);
    //   console.log(`CAMPOS PRODUCTOS:`)
    //   console.log(columns);
    //   console.log(arrayProducts);
    // })
    // .catch(e=> {
    //   console.error(`OCURRIÓ UN ERROR ${e}`);
    // })
})

function irAlProducto(product) {
  router.push({
    name: 'product',
    params: {id: product.id}
  })
}
onMounted(async ()=> {
  await allProducts();
  console.log(store.arrayProducts);
  // columns = Object.keys(arrayProducts.value[2]);
  
})
</script>
<template>
  <div class="">
    <table class="table-auto">
      <th v-for="(campo) in store.columns" :key="campo">
        <span>
          {{ campo }}
        </span>
      </th>
      <!-- <th v-for="campo in arrayProducts[2]" :key="campo">
        {{ Object.keys(arrayProducts[2]) }}
      </th> -->
      <tr v-for="product in store.arrayProducts" :key="product.id">
        <td v-for="(valorProducto,index) in Object.values(product)" :key="index" class="custom-td" @click="irAlProducto(product)" >
          <span>
          {{ valorProducto }}
          </span>

          <div v-if="typeof valorProducto ==='string' && valorProducto.startsWith('https')">
            <picture>
              <img :src=valorProducto alt="" class="">
            </picture>
          </div>

        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.custom-td {
  cursor: pointer;
}
</style>

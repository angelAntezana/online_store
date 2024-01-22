<script setup>
import { onMounted, ref } from 'vue';
import { useProductStore } from '../stores/productsFromApi';

let arrayProducts = ref([]);
let columns = ref([]);
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
onMounted(async ()=> {
  await allProducts();
  // columns = Object.keys(arrayProducts.value[2]);
  
})
</script>
<template>
  <div class="">
    <table class="table-auto">
      <th v-for="(campo) in store.columns" :key="campo">
        {{ campo }}
      </th>
      <!-- <th v-for="campo in arrayProducts[2]" :key="campo">
        {{ Object.keys(arrayProducts[2]) }}
      </th> -->
      <tr v-for="product in store.arrayProducts" :key="product.id">
        <td v-for="(valorProducto,index) in Object.values(product)" :key="index">
          {{ valorProducto }}
          <!-- <div v-if="valorProducto.length>0">
            <picture>
              <img :src=valorProducto[0] alt="" class="" style="width: 20px;">
            </picture>
          </div> -->

        </td>
      </tr>
    </table>
  </div>
</template>

<style>

</style>

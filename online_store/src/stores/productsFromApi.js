import serviceProducts from '@/services/Products'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const arrayProducts = ref([])
  const columns = ref([])
  let product = ref({});
  // const doubleCount = computed(() => count.value * 2)
  async function getAllProducts() {
    
    await serviceProducts.getAllProducts()
    .then(res=>{
      for(let i = 0; i< res.data.products.length; i++) {
        arrayProducts.value.push(res.data.products[i]);
      }
      let prueba = Object.keys(arrayProducts.value[2]);
      for(let z = 0; z < prueba.length; z++) {
        columns.value.push(prueba[z]);
      }
      // console.log(res.data.products);
      // console.log(`CAMPOS PRODUCTOS:`)
      // console.log(columns);
      // console.log(arrayProducts);
    })
    .catch(e=> {
      console.error(`OCURRIÓ UN ERROR ${e}`);
    })
  }

  async function getProduct(idProduct) {
    await serviceProducts.getProduct(idProduct)
    .then(res=> {
      console.log('PRODUCTO:');
      console.log(res);
      product.value = {...res.data};
    })
    .catch(error => {
      console.error(`ERROR AL OBTENER PRODUCTO: ${error}`);
    })
  }

  return {
    arrayProducts,
    product,
    columns,
    getAllProducts,
    getProduct
  }
})

import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

const host = ref('http://localhost:3000');
const { data } = await axios.get(`${host.value}/products`);

export const useProductsStore = defineStore('products', () => {
  const products = ref(data);
  return { products, host };
});

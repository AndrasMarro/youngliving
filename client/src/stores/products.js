import { defineStore } from 'pinia';
import { ref } from 'vue';

export const myProductStore = defineStore('productStore', () => {
  async function getData(path) {
    try {
      const response = await fetch(path);
      return await response.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  const path = '/assets/data/products.json';
  const products = ref(null);

  getData(path).then((data) => {
    if (data) products.value = data;
  });

  return { products };
});

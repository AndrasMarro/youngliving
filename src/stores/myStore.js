import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMyStore = defineStore('myStore', () => {
  async function getData(path) {
    try {
      const response = await fetch(path);
      return await response.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  const path = '/assets/data/articles.json';
  const articles = ref(null);

  getData(path).then((data) => {
    if (data) articles.value = data;
  });
  
  return { articles };
});

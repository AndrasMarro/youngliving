import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

const host = ref('http://localhost:3000');
const { data } = await axios.get(`${host.value}/articles`);

export const useArticlesStore = defineStore('articles', () => {
  const articles = ref(data);
  return { articles, host };
});

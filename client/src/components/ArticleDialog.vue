<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { showDialog } from '../utils/Toggles.js';
import { useArticlesStore } from '../stores/articles.js';
import { storeToRefs } from 'pinia';
const prop = defineProps({ article: Object });

const articleStore = useArticlesStore();
const { host } = storeToRefs(articleStore);
const newLikes = ref(0);

const toggleLike = async () => {
  await axios.patch(`${host.value}/articles/${prop.article.id}`, {
    likes: `${prop.article.likes + 1}`,
  });
  console.log(await articleStore.likesById(prop.article.id));
  newLikes.value = await articleStore.likesById(prop.article.id);
};
</script>

<template>
  <q-card class="my-card" style="width: auto; height: auto" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="col-5 flex flex-center">
        <q-img class="rounded-borders" :src="`/assets/images/intro/${article.image}`" />
      </q-card-section>
      <q-card-section class="q-pt-xs">
        <div class="text-overline q-mt-sm">{{ article.date }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ article.title }}</div>
        <div class="text-caption text-grey-8">
          {{ article.text }}
        </div>
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <div class="column q-ml-sm rounded-borders">
        <q-btn flat icon="favorite" @click="toggleLike()" />
        <span round class="q-mx-sm text-center">{{
          newLikes == 0 ? article.likes : newLikes
        }}</span>
      </div>
      <q-space></q-space>
      <q-btn outline @click="showDialog = !showDialog" style="opacity: 50%">ok</q-btn>
    </q-card-actions>
  </q-card>
</template>

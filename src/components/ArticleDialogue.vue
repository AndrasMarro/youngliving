<script setup>
import { ref } from 'vue';
import { showDialog } from '../utils/Toggles.js';
defineProps({ article: Object });

const likes = ref(0);
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
        <div class="text-caption text-grey">
          {{ article.text }}
        </div>
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <div class="column q-ml-sm rounded-borders">
        <q-btn
          flat
          icon="favorite"
          @click="likes >= article.likes ? likes++ : (likes = article.likes + 1)"
        />
        <span round class="q-mx-sm text-center">{{ likes > 0 ? likes : article.likes }}</span>
      </div>
      <q-space></q-space>
      <q-btn outline @click="showDialog = !showDialog" style="opacity: 50%">ok</q-btn>
    </q-card-actions>
  </q-card>
</template>

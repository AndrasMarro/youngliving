<script setup>
import { ref } from 'vue';
import { showDialog } from '../utils/Toggles.js';
import ArticleDialog from '../components/ArticleDialog.vue';

import articles from '/assets/data/articles.json';

const slide = ref('1');
const selectedDialog = ref(null);
</script>

<template>
  <q-responsive :ratio="1.777">
    <q-carousel animated infinite :autoplay="4000" v-model="slide">
      <q-carousel-slide name="1" img-src="/assets/slideshow/1.jpg" />
      <q-carousel-slide name="2" img-src="/assets/slideshow/2.jpg" />
      <q-carousel-slide name="3" img-src="/assets/slideshow/3.jpg" />
      <q-carousel-slide name="4" img-src="/assets/slideshow/4.jpg" />
      <q-carousel-slide name="5" img-src="/assets/slideshow/5.jpg" />
    </q-carousel>
  </q-responsive>
  <div class="row justify-center q-pa-xl">
    <div class="q-pa-sm" v-for="a in articles" :key="a.id">
      <q-card class="my-card" bordered>
        <q-img :src="`/assets/images/intro/${a.image}`" />

        <q-card-section>
          <div class="text-h6 text-grey-9 card-title-box">{{ a.title }}</div>
          <div class="text-caption text-grey-9">
            {{ a.text.substring(0, 125) + (a.text.length > 10 ? '...' : '') }}
          </div>
        </q-card-section>

        <q-card-actions>
          <q-space></q-space>
          <q-btn
            color="grey"
            @click="
              showDialog = !showDialog;
              selectedDialog = a;
            "
            label="Read more..."
            flat
            dense
          />
        </q-card-actions>
      </q-card>
    </div>
    <q-dialog v-model="showDialog"
      ><ArticleDialog :article="selectedDialog"></ArticleDialog
    ></q-dialog>
  </div>
</template>

<style lang="sass">
.my-card
  width: 300px
  height: 530px

.card-title-box
  height: 80px
</style>

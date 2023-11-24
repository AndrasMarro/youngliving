<script setup>
defineProps({ article: Object });
</script>

<template>
  <q-card class="my-card" style="width: 700px; height: 300px" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="col-5 flex flex-center">
        <q-img class="rounded-borders" :src="`/assets/images/intro/${article.image}`" />
      </q-card-section>
      <q-card-section class="q-pt-xs">
        <div class="text-overline">{{ article.title }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ article.title }}</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </div>
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-space></q-space>
      <q-btn flat icon="favorite" class="bg-teal-3">
        <span class="q-mx-md">{{ article.likes }}</span></q-btn
      >
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { showDialog } from '../utils/Toggles.js';
defineProps({ product: Object });
</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <img :src="'/images/products/' + product.image" />

      <q-card-actions align="center">
        <q-badge class="q-mr-sm text-strike" color="red">{{ '€ ' + product.price }}</q-badge>
        <q-badge class="q-mr-md text-subtitle2" color="green">{{
          '€ ' + product.discount
        }}</q-badge>
        <q-btn outline @click="showDialog = !showDialog" style="opacity: 50%">ok</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 450px
  height: 100%
</style>

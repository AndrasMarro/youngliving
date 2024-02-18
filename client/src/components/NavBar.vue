<script setup>
import { DrawerOpen } from '../utils/Toggles.js';
import { showLoginDialog } from '../utils/dialogToggles.js';
import LoginDialog from './LoginDialog.vue';

const toggleDrawer = () => (DrawerOpen.value = !DrawerOpen.value);
const toggleDialog = () => (showLoginDialog.value = !showLoginDialog.value);
</script>

<template>
  <!-- #region NAVBAR -->
  <q-header elevated class="bg-white text-primary">
    <q-toolbar class="q-px-lg">
      <q-btn dense flat round icon="menu" @click="toggleDrawer" />
      <!-- #region greater logo -->
      <q-img
        src="/Young-Living-Logo.svg"
        spinner-color="primary"
        fit="contain"
        height="70px"
        class="q-mt-md q-mb-lg q-ml-xl gt-xs"
        spinner-size="40px"
      />
      <q-btn
        dense
        flat
        label="PLEASE LOGIN"
        class="gt-xs"
        style="width: 120px"
        @click="toggleDialog"
      />
      <!-- #endregion -->
      <!-- #region lesser logo -->
      <q-img
        src="/Young-Living-Logo small.svg"
        spinner-color="primary"
        fit="contain"
        height="60px"
        class="q-my-md q-ml-xl lt-sm"
        spinner-size="40px"
      />
      <q-btn
        dense
        flat
        label="PLEASE LOGIN"
        class="lt-sm"
        style="width: 175px"
        @click="toggleDialog"
      />
      <!-- #endregion -->
    </q-toolbar>
  </q-header>
  <!-- #endregion -->

  <q-dialog v-model="showLoginDialog"><LoginDialog /> </q-dialog>
</template>

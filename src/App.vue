<script setup>
import Drawer from './components/SideBar.vue';
import { DrawerOpen } from './utils/Toggles.js';

const toggleDrawer = () => (DrawerOpen.value = !DrawerOpen.value);
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <!-- #region HEADER -->
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
        <q-btn dense flat label="PLEASE LOGIN" class="gt-md" style="width: 120px" />
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
        <q-btn dense flat round label="PLEASE LOGIN" class="lt-md" style="width: 175px" />
        <!-- #endregion -->
      </q-toolbar>
    </q-header>
    <!-- #endregion -->

    <q-page-container>
      <Drawer></Drawer>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat/Montserrat-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Lora';
  src: url('/fonts/Lora/Lora-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'LibreBodoni';
  src: url('/fonts/LibreBodoni/LibreBodoni-Regular.ttf') format('truetype');
}

.icons {
  opacity: 75%;
  width: 24px;
}

.q-img {
  -drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

/* * {
  font-family: 'Montserrat';
} */
</style>

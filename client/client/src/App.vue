<script setup>
import Drawer from './components/SideBar.vue';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <NavBar />
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

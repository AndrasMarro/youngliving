<script setup>
import { ref } from 'vue';

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <!-- #region header -->
    <q-header elevated class="bg-white text-primary">
      <q-toolbar class="q-px-lg">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <!-- #region greater -->
        <q-img
          src="/Young-Living-Logo.svg"
          spinner-color="primary"
          fit="contain"
          height="70px"
          class="q-my-md gt-md block"
          spinner-size="40px"
        />
        <q-btn dense flat round label="PLEASE LOGIN" class="gt-md block" style="width: 110px" />
        <!-- #endregion -->
        <!-- #region lesser -->
        <q-img
          src="/Young-Living-Logo small.svg"
          spinner-color="primary"
          fit="contain"
          height="60px"
          class="q-my-md lt-md block"
          spinner-size="40px"
        />
        <q-btn dense flat round label="PLEASE LOGIN" class="lt-md block" style="width: 150px" />
        <!-- #endregion -->
      </q-toolbar>
    </q-header>
    <!-- #endregion -->

    <q-drawer v-model="leftDrawerOpen" side="left" bordered :width="250" class="text-primary">
      <q-toolbar class="q-ml-sm q-mt-md">
        <q-toolbar-title class="text-grey-6 text-subtitle2">EXPLORE OUR SITE</q-toolbar-title>
      </q-toolbar>
      <!-- #region EXPLORE OUR SITE - links -->
      <q-list class="text-grey-9">
        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section> Homepage </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/essential-oils">
          <q-item-section avatar>
            <q-icon name="opacity" />
          </q-item-section>
          <q-item-section> Essential Oils </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/search">
          <q-item-section avatar>
            <q-icon name="search" />
          </q-item-section>
          <q-item-section> Search Products </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/about">
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section> About Us </q-item-section>
        </q-item>
      </q-list>
      <!-- #endregion -->

      <q-toolbar class="q-ml-sm q-mt-md">
        <q-toolbar-title class="text-grey-6 text-subtitle2">CONTACT US</q-toolbar-title>
      </q-toolbar>
      <!-- #region ABOUT US - links -->
      <q-list class="text-grey-9">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="mail" />
          </q-item-section>
          <q-item-section> Email </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="facebook" />
          </q-item-section>
          <q-item-section> Facebook </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="close" />
          </q-item-section>
          <q-item-section> X </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="photo_camera" />
          </q-item-section>
          <q-item-section> Instagram </q-item-section>
        </q-item>
      </q-list>
      <!-- #endregion -->
    </q-drawer>

    <q-page-container>
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

/* * {
  font-family: 'Montserrat';
} */
</style>

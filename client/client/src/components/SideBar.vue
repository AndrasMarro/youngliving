<script setup>
import { DrawerOpen } from '../utils/Toggles.js';
</script>

<template>
  <q-drawer
    v-model="DrawerOpen"
    class="text-primary"
    side="left"
    :width="220"
    show-if-above
    bordered
    elevated
  >
    <!-- #region EXPLORE OUR SITE - links -->
    <q-list class="text-grey-9">
      <q-item-label header class="q-mt-md">EXPLORE OUR SITE</q-item-label>
      <q-item clickable v-ripple to="/" active-class="bg-grey-6 text-white">
        <q-item-section section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section> Homepage </q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/essential-oils" active-class="bg-grey-6 text-white">
        <q-item-section avatar>
          <q-icon name="opacity" />
        </q-item-section>
        <q-item-section> Essential Oils </q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/search" active-class="bg-grey-6 text-white">
        <q-item-section avatar>
          <q-icon name="search" />
        </q-item-section>
        <q-item-section> Search Products </q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/about" active-class="bg-grey-6 text-white">
        <q-item-section avatar>
          <q-icon name="people" />
        </q-item-section>
        <q-item-section> About Us </q-item-section>
      </q-item>
    </q-list>
    <!-- #endregion -->

    <!-- #region CONTACT US - links -->
    <q-list class="text-grey-9">
      <q-item-label header class="q-mt-md">CONTACT US</q-item-label>
      <q-item clickable v-ripple to="/not-there">
        <q-item-section avatar>
          <q-icon name="mail" />
        </q-item-section>
        <q-item-section> Email </q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/not-there">
        <q-item-section avatar>
          <q-icon name="facebook" />
        </q-item-section>
        <q-item-section> Facebook </q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/not-there">
        <q-item-section avatar>
          <q-img src="/assets/x-twitter.svg" class="icons" height="24px"></q-img>
        </q-item-section>
        <q-item-section> X Corp. </q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/not-there">
        <q-item-section avatar>
          <q-img src="/assets/instagram.svg" class="icons" height="24px"></q-img>
        </q-item-section>
        <q-item-section> Instagram </q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/not-there">
        <q-item-section avatar>
          <q-img src="/assets/tiktok.svg" class="icons" height="28px"></q-img>
        </q-item-section>
        <q-item-section> Tik Tok </q-item-section>
      </q-item>
    </q-list>
    <!-- #endregion -->
  </q-drawer>
</template>

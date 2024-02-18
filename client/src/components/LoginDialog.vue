<script setup>
import { ref } from 'vue';
import { notifySuccess, notifyWarning } from '../composable/notify.js';

const fname = ref('');
const lname = ref('');
const age = ref('');
const accept = ref(false);

const onSubmit = () => {
  accept.value !== true
    ? notifyWarning('You need to accept the license and terms first!')
    : notifySuccess('Welcome back! You are logged in!');
};
</script>

<template>
  <q-card class="q-pa-md" style="width: 450px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="fname"
        label="Your first name *"
        hint="Please type your first name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'type your first name']"
      />

      <q-input
        filled
        v-model="lname"
        label="Your last name *"
        hint="Please type your last name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'type your last name']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" class="q-mt-none" />

      <div class="row justify-between q-mt-xl">
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" outline class="q-ml-sm" />
        </div>
        <q-btn label="Close" type="close" color="primary" class="q-ml-sm" v-close-popup="2" />
      </div>
    </q-form>
  </q-card>
</template>

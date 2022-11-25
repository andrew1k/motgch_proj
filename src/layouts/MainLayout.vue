<template>
  <v-snackbar
    v-model="snackbar"
    multi-line
    location="top"
    v-if="message"
  >{{ message }}
  </v-snackbar>
  <TheAppBar/>
  <TheBottomNavigation />
  <v-main>
    <v-container>
      <routerView/>
    </v-container>
  </v-main>
</template>

<script setup>
import TheAppBar from '@/components/navigations/TheAppBar'
import TheBottomNavigation from '@/components/navigations/TheBottomNavigation'
import {computed, ref} from 'vue'
import store from '@/store'

let message = computed(() => store.getters['errors/getErrorMessage'])
const snackbar = ref(true)
</script>
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
    <v-container :class="smAndDown ? ['py-0', 'my-1', 'px-1', 'px-md-2', 'px-lg-2', 'px-xl-16'] : ['p-2', 'm-2',]">
<!--    <v-container :class="['py-0', 'my-1', 'px-1', 'px-md-2', 'px-lg-2', 'px-xl-16']">-->
      <routerView/>
    </v-container>
  </v-main>
</template>

<script setup>
import TheAppBar from '@/components/navigations/TheAppBar'
import TheBottomNavigation from '@/components/navigations/TheBottomNavigation'
import {computed, ref} from 'vue'
import store from '@/store'
import {useDisplay} from 'vuetify'

const {smAndDown} = useDisplay()

let message = computed(() => store.getters['errors/getErrorMessage'])
const snackbar = ref(true)
</script>
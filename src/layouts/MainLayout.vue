<template>
  <TheAppBar />
  <TheNavDrawer />
  <TheBottomNavigation v-if="mdAndDown"/>
  <v-main>
    <v-card max-width="600" class="mx-auto mt-2 mb-6" variant="text" elevation="0">
      <RouterView/>
    </v-card>
  </v-main>
</template>

<script setup>
import TheAppBar from '@/components/navigations/TheAppBar'
import TheBottomNavigation from '@/components/navigations/TheBottomNavigation'
import TheNavDrawer from '@/components/navigations/TheNavDrawer.vue'
import {useDisplay} from 'vuetify'

const {mdAndDown} = useDisplay()
</script>
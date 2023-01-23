<template>
  <TheAppBar />
  <TheNavDrawer />
  <TheBottomNavigation v-if="mdAndDown"/>
  <v-main>
      <routerView/>
  </v-main>
</template>

<script setup>
import TheAppBar from '@/components/navigations/TheAppBar'
import TheBottomNavigation from '@/components/navigations/TheBottomNavigation'
import TheNavDrawer from '@/components/navigations/TheNavDrawer.vue'
import {useDisplay} from 'vuetify'

const {mdAndDown} = useDisplay()
</script>
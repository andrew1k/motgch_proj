<template>
  <TheAppBar :appbar-title="$route.meta.title" />
  <TheNavDrawer />
  <TheBottomNavigation v-if="mdAndDown"/>
  <v-main>
    <v-card max-width="600" class="mx-auto mb-6" rounded="0" variant="text" elevation="0">
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
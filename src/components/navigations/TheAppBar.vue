<template>
  <v-app-bar
    density="compact"
    prominent
    color="background"
    elevation="0"
    flat
  >
    <VBtn icon="mdi-menu" @click="drawer = !drawer" />
    <VSpacer />
    <v-app-bar-title @click="$router.push('/')">
      MOTGCH
    </v-app-bar-title>
    <vSpacer />
    <TheAccountMenu />
  </v-app-bar>
</template>

<script setup>
import {storeToRefs} from 'pinia'
import {useAppState} from '@/stores/appState'
import TheAccountMenu from '@/components/navigations/TheAccountMenu.vue'

const appState = useAppState()
const {drawer} = storeToRefs(appState)
</script>
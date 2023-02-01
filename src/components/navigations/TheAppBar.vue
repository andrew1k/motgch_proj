<template>
  <v-app-bar
    height="50"
    prominent
    elevation="3"
    flat
  >
    <VAppBarNavIcon @click="drawer = !drawer"/>
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
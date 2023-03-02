<template>
  <v-app-bar
    density="compact"
    prominent
    elevation="3"
    flat
  >
    <VProgressLinear indeterminate absolute color="secondary" v-if="isPending" />
<!--    <VAppBarNavIcon @click="drawer = !drawer"/>-->
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
const {drawer, isPending} = storeToRefs(appState)
</script>
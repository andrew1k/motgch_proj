<template>
  <v-card class="ma-2">
    <div>notificationsPage.vue</div>
    <VBtn @click="sheduleBasic" icon="mdi-bell"/>
  </v-card>
</template>

<script setup>
import {useNotificationsStore} from '@/stores/notificationsStore'
const {sheduleBasic} = useNotificationsStore()
</script>
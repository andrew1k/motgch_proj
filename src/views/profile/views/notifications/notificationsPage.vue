<template>
  <v-card class="ma-2">
    <v-card-title>Notifications Page</v-card-title>
    <VBtn
      @click="scheduleNotifications({
    title: 'noti',
    body: 'body text',
    id: '1',
    schedule: {at: new Date(Date.now()+ 1000 * 2)}
    })"
      icon="mdi-bell"/>
    <VBtn
      @click="scheduleNotifications({title: 'noti', body: 'body text', id: '2', schedule: {at: new Date(Date.now()+ 1000 * 10)}})"
      icon="mdi-bell"/>
  </v-card>
</template>

<script setup>
import {useNotificationsStore} from '@/stores/notificationsStore'

const {scheduleNotifications} = useNotificationsStore()
</script>
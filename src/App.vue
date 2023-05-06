<template>
  <v-app :theme="theme">
    <v-snackbar
      v-model="snackbarMessage"
      multi-line
      location="top"
    >
      {{ snackbarMessage }}
    </v-snackbar>
    <component :is="`${layout}-layout`"/>
  </v-app>
</template>

<script>
import {computed, onBeforeMount} from 'vue'
import {useRoute} from 'vue-router'
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'
import ProfileLayout from '@/layouts/ProfileLayout.vue'
import CardLayout from '@/layouts/CardLayout.vue'
import NewsLayout from '@/layouts/NewsLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import {useAppState, useSnackbarMessages} from '@/stores/appState'
import {storeToRefs} from 'pinia'
import {useNotificationsStore} from '@/stores/notificationsStore'
import {useNewsfeedStore} from '@/stores/newsfeedStore'

export default {
  setup() {
    const messagesStore = useSnackbarMessages()
    const {snackbarMessage} = storeToRefs(messagesStore)
    const appState = useAppState()
    const { theme} = storeToRefs(appState)
    const { scheduleNotifications } = useNotificationsStore()
    scheduleNotifications()

    const { getSunday } = useNewsfeedStore()
    onBeforeMount(() => {
      getSunday()
    })

    const route = useRoute()
    return {
      layout: computed(() => route.meta.layout),
      snackbarMessage,
      theme,
    }
  },
  components: {
    MainLayout,
    AuthLayout,
    ProfileLayout,
    CardLayout,
    NewsLayout,
    AdminLayout,
  },
}
</script>
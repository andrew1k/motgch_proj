<template>
  <v-app>
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
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'
import ProfileLayout from '@/layouts/ProfileLayout.vue'
import CardLayout from '@/layouts/CardLayout.vue'
import NewsLayout from '@/layouts/NewsLayout.vue'
import {useSnackbarMessages} from '@/stores/appState'
import {storeToRefs} from 'pinia'

export default {
  setup() {
    const messagesStore = useSnackbarMessages()
    const {snackbarMessage} = storeToRefs(messagesStore)


    const route = useRoute()
    return {
      layout: computed(() => route.meta.layout),
      snackbarMessage,
    }
  },
  components: {
    MainLayout,
    AuthLayout,
    ProfileLayout,
    CardLayout,
    NewsLayout,
  },
}
</script>
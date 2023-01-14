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
import SettingsLayout from '@/layouts/SettingsLayout'
import {useSnackbarMessages} from '@/stores/snackbarMessages'
import {storeToRefs} from 'pinia'

export default {
  setup() {
    const messagesStore = useSnackbarMessages()
    const {snackbarMessage} = storeToRefs(messagesStore)
    console.log(snackbarMessage.value)

    const route = useRoute()
    return {
      layout: computed(() => route.meta.layout),
      snackbarMessage,
    }
  },
  components: {
    MainLayout,
    AuthLayout,
    SettingsLayout,
  },
}
</script>
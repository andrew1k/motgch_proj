<template>
  <v-app>
    <v-snackbar v-model="getMessage" multi-line location="top" >{{ getMessage }}</v-snackbar>
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

export default {
  setup() {
    const {getMessage} = useSnackbarMessages()
    const route = useRoute()
    return {
      layout: computed(() => route.meta.layout),
      getMessage
    }
  },
  components: {
    MainLayout,
    AuthLayout,
    SettingsLayout,
  },
}
</script>
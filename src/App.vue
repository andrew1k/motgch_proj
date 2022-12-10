<template>
  <v-app>
    <v-snackbar v-model="message" multi-line location="top" >{{ message }}</v-snackbar>
    <component :is="`${layout}-layout`"/>
  </v-app>
</template>

<script>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'
import SettingsLayout from '@/layouts/SettingsLayout'
import store from '@/store'

export default {
  setup() {
    const route = useRoute()
    return {
      layout: computed(() => route.meta.layout),
      message: computed(() => store.getters['message/getMessage']),
    }
  },
  components: {
    MainLayout,
    AuthLayout,
    SettingsLayout,
  },
}
</script>
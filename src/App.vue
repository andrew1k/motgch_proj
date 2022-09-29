<template>
  <v-app>
    <component :is="`${layout}-layout`" v-if="layout"/>
  </v-app>
</template>

<script>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'
import SettingsLayout from '@/layouts/SettingsLayout'

export default {
  name: 'App',
  setup() {
    const route = useRoute()
    return {
      layout: computed(() => route.meta.layout),
    }
  },
  components: {
    MainLayout,
    AuthLayout,
    SettingsLayout,
  },
}
</script>
<template>
  <vBtn
    icon="mdi-logout"
    flat
    @click="appLogout"
  />
</template>

<script setup>
import {useAuthStore} from '@/stores/authStore'
const { appLogout } = useAuthStore()
</script>
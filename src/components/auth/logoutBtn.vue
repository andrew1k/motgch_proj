<template>
  <vBtn
    append-icon="mdi-logout"
    flat
    @click="appLogout"
  >Выйти</vBtn>
</template>

<script setup>
import {useAuthStore} from '@/stores/authStore'
const { appLogout } = useAuthStore()
</script>
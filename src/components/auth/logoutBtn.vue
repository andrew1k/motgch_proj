<template>
  <vBtn
    icon="mdi-logout"
    flat
    @click="onLogout"
  />
</template>

<script setup>
import store from '@/store'

const onLogout = async () => {
  await store.dispatch('auth/appLogout')
}
</script>
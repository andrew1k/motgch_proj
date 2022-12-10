<template>
  <vBtn
    icon="mdi-logout"
    flat
    @click="onLogout"
  />
</template>

<script setup>
import store from '@/store'
import router from '@/router'

const onLogout = () => {
  store.dispatch('auth/appLogout')
    .then(() => {router.push('/auth')})
}
</script>
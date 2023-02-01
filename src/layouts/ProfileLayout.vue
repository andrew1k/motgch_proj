<template>
  <the-card-toolbar :toolbarTitle="$route.meta.title">
    <template #rightSpace>
      <LogoutBtn />
    </template>
  </the-card-toolbar>
  <v-main>
    <v-card elevation="0" variant="text" class="mx-auto h-screen" max-width="900">
      <router-view/>
    </v-card>
  </v-main>
</template>

<script setup>
import TheCardToolbar from '@/components/navigations/TheCardToolbar.vue'
import LogoutBtn from '@/components/auth/logoutBtn.vue'
</script>
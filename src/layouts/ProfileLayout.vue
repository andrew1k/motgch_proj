<template>
  <the-card-toolbar :toolbarTitle="$route.meta.title">
    <template v-slot:rightSpace>
      <LogoutBtn />
    </template>
  </the-card-toolbar>
  <v-main>
      <router-view/>
  </v-main>
</template>

<script setup>
import TheCardToolbar from '@/components/navigations/TheCardToolbar.vue'
import LogoutBtn from '@/components/auth/logoutBtn.vue'
</script>
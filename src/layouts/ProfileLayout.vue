<template>
  <the-card-toolbar :toolbarTitle="$route.meta.title" :toolbar-color="'primary'">
    <template #rightSpace>
      <LogoutBtn />
    </template>
  </the-card-toolbar>
  <v-main>
    <v-card elevation="0" variant="text" class="mx-auto h-screen" max-width="600">
      <router-view/>
    </v-card>
  </v-main>
</template>

<script setup>
import TheCardToolbar from '@/components/navigations/TheCardToolbar.vue'
import LogoutBtn from '@/views/auth/components/LogoutBtn.vue'
</script>
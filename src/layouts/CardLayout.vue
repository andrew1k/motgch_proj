<template>
  <TheCardToolbar :toolbar-title="title" :toolbar-color="color" />
  <v-main>
    <v-card max-width="600" variant="text" class="mx-auto" elevation="0">
    <router-view />
    </v-card>
  </v-main>
</template>

<script setup>
import TheCardToolbar from '@/components/navigations/TheCardToolbar.vue'
import {useRouter} from 'vue-router'
import {ref} from 'vue'
const router = useRouter()
const title = ref(router.currentRoute.value.meta.title)
const color = ref(router.currentRoute.value.meta.color)
</script>
<template>
  <v-card-title class="mt-2">В это воскресенье</v-card-title>
  <v-card
    @click="$router.push('/sunday')"
    class="ma-2"
    elevation="7"
    rounded="xl"
  >
    <VImg :src="youtubePic"/>
  </v-card>
</template>

<script setup>
import youtubePic from '@/assets/appPics/mainYoutube.png'
</script>
<template>
  <VCardTitle v-text="'Поклонение'" class="mt-4"/>
  <v-card class="ma-2">
    <VImg :src="youtubePic"/>
  </v-card>
  <VCardTitle v-text="'Молитвенное служение'" class="mt-4" />
  <v-card class="ma-2">
    <VImg :src="youtubePic"/>
  </v-card>
</template>

<script setup>
import youtubePic from '@/assets/appPics/youtube.png'
</script>
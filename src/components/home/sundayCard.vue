<template>
  <v-card-title class="mt-2">В это воскресенье</v-card-title>
  <v-card
    @click="$router.push('/sunday')"
    class="ma-2"
    rounded="xl"
  >
    <VImg :src="youtubePic"/>
  </v-card>
  <v-card-text>Слово недели сюда, допустим такой длины, как написано здесь, ну или может чуть больше, желательно с побуждением к действию</v-card-text>
</template>

<script setup>
import youtubePic from '@/assets/appPics/mainYoutube.png'
</script>
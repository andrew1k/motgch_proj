<template>
  <the-card-toolbar toolbar-title="Поклонение" >
    <template v-slot:rightSpace>
      <v-btn variant="outlined">Присоединиться</v-btn>
    </template>
  </the-card-toolbar>
  <VCardTitle v-text="'Поклонение'" class="text-center"/>
  <v-card elevation="3" max-width="800" class="mx-auto ma-2">
    <VImg src="https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/images%2FsundayCard.png?alt=media&token=ed68b420-fb14-4946-b6da-84b628399244"/>
  </v-card>
  <VCardTitle v-text="'Молитвенное служение'" class="text-center"/>
  <v-card elevation="3" max-width="800" class="mx-auto ma-2">
    <VImg src="https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/images%2FsundayCard.png?alt=media&token=ed68b420-fb14-4946-b6da-84b628399244"/>
  </v-card>
</template>

<script setup>

import TheCardToolbar from '@/components/navigations/TheCardToolbar.vue'
</script>
<template>
  <v-card class="ma-2" rounded="pill" append-icon="mdi-pen" v-if="showForm" title="Создать новость" @click="showForm = !showForm">
  </v-card>
  <v-card v-if="!showForm" class="ma-2" elevation="0" variant="text">
    <v-file-input
      class="ma-2"
      variant="solo"
      label="Image"
      v-model="img"
      show-size
      prepend-icon="mdi-camera"
    />
    <v-text-field class="ma-2" variant="solo" label="Title" hide-details v-model="title"/>
    <v-text-field class="ma-2" variant="solo" label="Subtitle" hide-details v-model="subtitle"/>
    <v-textarea class="ma-2" variant="solo" label="Text" hide-details v-model="text"/>
    <v-card-actions>
      <VBtn icon="mdi-close" @click="showForm = !showForm"/>
      <VSpacer/>
      <v-btn variant="flat" @click="uploadNews(img, {title, subtitle, text})">Сохранить</v-btn>
    </v-card-actions>
  </v-card>
  <VDivider />
</template>

<script setup>
import {ref} from 'vue'
import {useNewsfeedStore} from '@/stores/newsfeedStore'

const showForm = ref(true)
const {uploadNews} = useNewsfeedStore()
const img = ref(null)
const title = ref('')
const subtitle = ref('')
const text = ref('')
</script>
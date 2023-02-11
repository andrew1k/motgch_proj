<template>
  <VCard v-if="!showCard" @click="showCard = !showCard" class="ma-2" append-icon="mdi-pen" title="Create story" />
  <v-card class="ma-2" v-if="showCard">
    <VFileInput
      clearable
      variant="solo"
      label="Preview pic"
      hide-details
      class="ma-2"
      v-model="previewIgm"
    />
    <VFileInput
      multiple
      clearable
      chips
      variant="solo"
      class="ma-2"
      hide-details
      label="Story pics"
      v-model="storyImgs"
    />
    <v-card-actions>
      <VBtn @click="showCard = !showCard" icon="mdi-close" />
      <VSpacer />
      <v-btn variant="flat" @click="uploadStory(previewIgm, storyImgs)">Upload story</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import {useNewsfeedStore} from '@/stores/newsfeedStore'

const previewIgm = ref(null)
const storyImgs = ref(null)

const {uploadStory} = useNewsfeedStore()

const showCard = ref(false)
</script>
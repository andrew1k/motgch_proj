<template>
  <v-card v-if="!showCard" @click="showCard = !showCard" class="ma-2 " height="100" width="100" >
    <div class="d-flex fill-height align-center justify-center">
      <VIcon  icon="mdi-plus" />
    </div>
  </v-card>
  <v-card class="ma-2" v-if="showCard" elevation="0" rounded="0" variant="text">
    <VFileInput
      clearable
      label="Preview pic"
      hide-details
      v-model="previewIgm"
    />
    <VFileInput
      multiple
      clearable
      chips
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
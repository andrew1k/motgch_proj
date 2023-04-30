<template>
<!--  <v-card v-if="!showCard" @click="showCard = !showCard" class="ma-2 " height="120" width="100" >-->
<!--    <div class="d-flex fill-height align-center justify-center">-->
<!--      <VIcon  icon="mdi-plus" />-->
<!--    </div>-->
<!--  </v-card>-->
  <v-card class="ma-2" elevation="0" rounded="0" variant="text">
    <VTextField
      class="mt-2"
      v-model="title"
      density="compact"
      label="Описание"
      hide-details
    />
    <VFileInput
      clearable
      label="Preview pic"
      hide-details
      density="compact"
      v-model="previewIgm"
    />
    <VFileInput
      multiple
      density="compact"
      clearable
      chips
      hide-details
      label="Story pics"
      v-model="storyImgs"
    />
    <v-card-actions>
      <VBtn @click="showCard = !showCard" icon="mdi-close" />
      <VSpacer />
      <v-btn variant="flat" @click="uploadStory(previewIgm, storyImgs, title)">Upload story</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import {useNewsfeedStore} from '@/stores/newsfeedStore'

const previewIgm = ref(null)
const storyImgs = ref(null)
const title = ref('')

const {uploadStory} = useNewsfeedStore()

// const showCard = ref(false)
</script>
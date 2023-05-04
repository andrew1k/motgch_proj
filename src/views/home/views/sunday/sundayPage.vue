<template>
  <v-scale-transition>
  <v-card variant="text" elevation="0" rounded="0">
  <v-card class="ma-2">
    <LiteYouTubeEmbed :id="sunday.id" :title="sunday.title" />
  </v-card>
  <v-card class="ma-2 pa-2">
    <v-card-title v-text="'Конспект проповеди'" />
      <QuillEditor v-model:content="sunday.text" content-type="html" toolbar="minimal" />
    <v-card-actions>
      <vSpacer/>
      <v-btn
              @click="saveNotes(sunday.text, sunday.id)"
              variant="text"
              append-icon="mdi-bookmark-outline"
      >
          Сохранить
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-card>
  </v-scale-transition>
</template>

<script setup>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
import {useNewsfeedStore} from '@/stores/newsfeedStore'
import {storeToRefs} from 'pinia'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const newsfeedStore = useNewsfeedStore()
const {sunday} = storeToRefs(newsfeedStore)

const saveNotes = (txt, id) => {
  console.log(txt, id)
}

</script>
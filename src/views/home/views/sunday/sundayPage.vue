<template>
  <v-scale-transition>
  <v-card variant="text" elevation="0" rounded="0">
  <v-card class="ma-2">
    <LiteYouTubeEmbed :id="sunday.id" :title="sunday.title" />
  </v-card>
  <v-card class="ma-2 pa-2">
<!--    <v-textarea-->
<!--      outlined-->
<!--      auto-grow-->
<!--      density="comfortable"-->
<!--      v-model="text"-->
<!--      variant="underlined"-->
<!--      class="ma-1"-->
<!--      v-html="item.text"-->
<!--    />-->
    <v-card-text v-html="sunday.text" />
    <v-card-actions>
      <vSpacer/>
      <v-btn @click="saveNotes(text, sunday.id)" variant="text" append-icon="mdi-bookmark-outline">Сохранить
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-card>
  </v-scale-transition>
</template>

<script setup>
import {ref} from 'vue'
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
import {useNewsfeedStore} from '@/stores/newsfeedStore'
import {storeToRefs} from 'pinia'

const newsfeedStore = useNewsfeedStore()
const {sunday} = storeToRefs(newsfeedStore)


const text = ref('')
const saveNotes = (txt) => {
  console.log(txt)
}

</script>
<template>
  <v-card variant="text" elevation="0" rounded="0" v-for="item in sunday" :key="item.id">
  <v-card class="ma-2">
    <LiteYouTubeEmbed :id="item.id" :title="item.title" />
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
    <v-card-text v-html="item.text" />
    <v-card-actions>
      <vSpacer/>
      <v-btn @click="saveNotes(text)" @keydown.enter="saveNotes" variant="text" append-icon="mdi-bookmark-outline">Сохранить
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-card>
</template>

<script setup>
import {ref, onBeforeMount} from 'vue'
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
import {useNewsfeedStore} from '@/stores/newsfeedStore'
import {storeToRefs} from 'pinia'

const newsfeedStore = useNewsfeedStore()
const {getSunday} = newsfeedStore
const {sunday} = storeToRefs(newsfeedStore)

onBeforeMount(async () => {
  await getSunday()
})

// const sundayText = ref(`Lorem ipsum dolor sit amet,
// consectetur adipisicing elit. Accusantium, assumenda at
// beatae debitis dolorum,
// eius excepturi iure laborum nihil nobis officia quibusdam quod ratione sed, sint soluta sunt suscipit tempore vel vitae! Ab accusantium architecto aspernatur assumenda commodi, debitis distinctio dolor ex fuga iure laboriosam maiores natus nesciunt non odio officia omnis quasi quia repellat repellendus reprehenderit repudiandae rerum sit?
//
// text________________
//
// text________________
//
// text________________
//
// xte
// `)

const text = ref('')
const saveNotes = (txt) => {
  console.log(txt)
}

</script>
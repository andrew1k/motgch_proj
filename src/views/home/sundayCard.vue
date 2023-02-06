<template>
    <v-card class="ma-2">
      <v-img
        :src="youtube"/>
    </v-card>
  <v-card class="ma-2">
  <v-card-text>Конспект проповеди, который вы можете изменять и сохранять себе:</v-card-text>
      <v-textarea
        outlined
        auto-grow
        density="comfortable"
        v-model="sundayText"
        variant="underlined"
        class="ma-1"
      />
      <v-card-actions>
        <vSpacer/>
        <v-btn @click="saveNotes" @keydown.enter="saveNotes" variant="flat" v-text="`Сохранить себе`"/>
      </v-card-actions>
    </v-card>

</template>

<script setup>
import {ref} from 'vue'
import youtube from '@/assets/appPics/youtube.png'

const sundayText = ref(`Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Accusantium, assumenda at
beatae debitis dolorum,
eius excepturi iure laborum nihil nobis officia quibusdam quod ratione sed, sint soluta sunt suscipit tempore vel vitae! Ab accusantium architecto aspernatur assumenda commodi, debitis distinctio dolor ex fuga iure laboriosam maiores natus nesciunt non odio officia omnis quasi quia repellat repellendus reprehenderit repudiandae rerum sit?

text________________

text________________

text________________

xte
`)
const saveNotes = () => {
  console.log(sundayText.value)
}

</script>
<template>
  <TheCardToolbar toolbar-title="В это воскресенье"/>
  <v-card-title class="text-center" v-text="`В это воскресенье`"/>
  <v-card max-width="1000" class="mx-auto ma-1" elevation="3">
    <v-img src="https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/images%2FsundayCard.png?alt=media&token=ed68b420-fb14-4946-b6da-84b628399244"/>
  </v-card>
  <v-card max-width="1000" class="mx-auto" variant="text">
  <v-card-text class="text-center">Конспект проповеди, который вы можете изменять и сохранять себе:</v-card-text>

    <v-textarea
      outlined
      auto-grow
      density="comfortable"
      v-model="sundayText"
      variant="solo"
      class="ma-1"
    />
    <v-card-actions class="mb-6">
      <vSpacer/>
      <v-btn @click="saveNotes" @keydown.enter="saveNotes" v-text="`Сохранить себе`"/>
    </v-card-actions>
  </v-card>

</template>

<script setup>
import {ref} from 'vue'
import TheCardToolbar from '@/components/navigations/TheCardToolbar.vue'

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
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
    <VSelect 
      v-model="leader"
      variant="solo"
      class="ma-2"
      :items="leaders"
      :hint="`${leader?.leaderName} ${leader?.leaderTitle}`"
      item-title="leaderName"
      item-value="leaderName"
      return-object
      label="Leader"
    />
    <v-card-actions>
      <VBtn icon="mdi-close" @click="showForm = !showForm"/>
      <VSpacer/>
      <v-btn variant="flat" @click="uploadNews(img, {title, subtitle, text, leaderName: leader.leaderName, leaderTitle: leader.leaderTitle, leaderUrl: leader.leaderUrl})">Сохранить</v-btn>
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
const leader = ref()
const leaders = ref([
  {leaderName: 'Даниил Шатров', leaderTitle: 'Ведущий пастор', leaderUrl: 'https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/leaders%2FDaniil%20Shatrov.jpg?alt=media&token=b63b150a-8c9d-4c48-a1fd-4bd72a808bfa'},
  {leaderName: 'Дмитрий Шатров', leaderTitle: 'Епископ', leaderUrl: 'https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/leaders%2FDD.png?alt=media&token=7b1cf06a-7af4-4dc2-86ee-bd06f432d392'},
  {leaderName: 'Александр Холеменко', leaderTitle: 'Пастор', leaderUrl: 'https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/leaders%2FAH.jpg?alt=media&token=99ac13aa-ab4a-41d9-a791-e1d06165aec2'},
  ])
</script>
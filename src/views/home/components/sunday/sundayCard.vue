<template>
  <v-card-title class="mt-2">В это воскресенье</v-card-title>
  <v-card
    to="/sunday"
    class="ma-2"
  >
      <VSkeletonLoader v-if="isPending" />
    <LiteYouTubeEmbed v-if="!isPending" :id="sunday?.id" :title="sunday?.title" />
  </v-card>
    <VSkeletonLoader type="list-item" color="background" v-if="isPending" />
  <v-card-text v-if="!isPending">
    <h4 class="font-weight-light" v-html="sunday?.title"/>
  </v-card-text>
<!--   ----------------------------------------------------------------------------------------------------------------------- Admin tool  -->
    <v-btn class="mx-2" v-if="isAdmin" @click="show = !show">Обновить ВС</v-btn>
    <v-card v-if="show" class="ma-2">
      <VTextField
        class="ma-2"
        v-model="title"
        label="Описание"
        hide-details
      />
      <VTextarea
        class="ma-2"
        v-model="text"
        label="Текст"
        hide-details
        variant="outlined"
      />
      <VTextField
        class="ma-2"
        v-model="id"
        label="ID"
        hide-details
      />
      <v-card-actions>
        <VSpacer />
        <v-btn @click="updateSunday({text, title, id})">Обновить</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script setup>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import {useNewsfeedStore} from '@/stores/newsfeedStore'
import {storeToRefs} from 'pinia'
import {ref} from 'vue'
import {useAuthStore} from '@/stores/authStore'
import {useAppState} from '@/stores/appState'
const newsfeedStore = useNewsfeedStore()
const {updateSunday} = newsfeedStore
const {sunday} = storeToRefs(newsfeedStore)

const appState = useAppState()
const {isPending} = storeToRefs(appState)

const title = ref('')
const text = ref('')
const id = ref('')

const {isAdmin} = useAuthStore()
const show = ref(false)
</script>
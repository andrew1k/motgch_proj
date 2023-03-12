<template>
  <v-card
    v-for="item in sunday"
    :key="item?.id"
    variant="text"
    elevation="0"
    rounded="0"
  >
  <v-card-title class="mt-2">В это воскресенье</v-card-title>
  <v-card
    :to="{name: 'sunday', params: {id: item?.id}}"
    class="ma-2"
  >
    <LiteYouTubeEmbed :id="item?.id" :title="item?.title" />
  </v-card>
  <v-card-text>
    <h4 class="font-weight-light" v-html="item?.title"/>
  </v-card-text>
  </v-card>
</template>

<script setup>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import {useNewsfeedStore} from '@/stores/newsfeedStore'
import {storeToRefs} from 'pinia'
import {onBeforeMount} from 'vue'
const newsfeedStore = useNewsfeedStore()
const {getSunday} = newsfeedStore
const {sunday} = storeToRefs(newsfeedStore)

onBeforeMount(async () => {
  await getSunday()
})
</script>
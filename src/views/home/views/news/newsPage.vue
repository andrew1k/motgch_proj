<template>
  <VBtn variant="text" prepend-icon="mdi-chevron-left" @click="$router.back()">Back</VBtn>
  <v-card class="ma-2" >
    <v-img :src="newsItem?.url">
    </v-img>
    <v-card-title>
      {{ newsItem.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ newsItem.subtitle }}
    </v-card-subtitle>
    <v-card-text>
      {{ newsItem.text }}
    </v-card-text>
  </v-card>
</template>

<script setup>
import {defineProps, } from 'vue'
import {useNewsfeedStore} from '@/stores/newsfeedStore'
import {storeToRefs} from 'pinia'
const newsfeedStore = useNewsfeedStore()
const {getNewsItem} = newsfeedStore
const {newsItem} = storeToRefs(newsfeedStore)
const props = defineProps({
  id: {
    type: String,
  }
})
getNewsItem(props.id)
</script>
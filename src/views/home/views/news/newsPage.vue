<template>
  <v-card class="ma-2" elevation="3">
    <v-img :src="newsItem?.url">
      <v-card-actions class="ma-2">
        <VBtn variant="flat" color="surface" elevation="3" icon="mdi-chevron-left" @click="$router.push('/')"/>
        <VSpacer/>
        <VBtn variant="flat" color="surface" elevation="3" icon="mdi-bookmark-outline"/>
      </v-card-actions>
    </v-img>
    <VCardTitle class="text-indigo-darken-2 font-weight-bold" v-html="newsItem?.subtitle"/>
    <VCardItem :prepend-avatar="newsItem?.url" title="Даниил Шатров" subtitle="25 мин назад"/>
    <VCardText v-html="newsItem?.text"/>
  </v-card>
</template>

<script setup>
import {defineProps} from 'vue'
import {useNewsfeedStore} from '@/stores/newsfeedStore'
import {storeToRefs} from 'pinia'

const newsfeedStore = useNewsfeedStore()
const {getNewsItem} = newsfeedStore
const {newsItem} = storeToRefs(newsfeedStore)
const props = defineProps({
  id: {
    type: String,
  },
})
getNewsItem(props.id)
</script>
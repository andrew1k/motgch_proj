<template>
  <v-card-actions class="ma-2">
    <VBtn variant="text" prepend-icon="mdi-chevron-left" @click="$router.push('/')">Назад</VBtn>
    <VSpacer/>
    <VBtn variant="text" append-icon="mdi-bookmark-outline">Сохранить</VBtn>
  </v-card-actions>
  <v-card class="ma-2">
    <VImg :src="newsItem?.url"/>
  </v-card>
  <v-card class="ma-2">
    <VCardTitle class="text-indigo-darken-2 font-weight-bold" v-html="newsItem?.title"/>
    <VCardSubtitle v-html="newsItem?.subtitle" />
    <VCardItem :prepend-avatar="newsItem?.leaderUrl" :title="newsItem?.leaderName" subtitle="25 мин назад"/>
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